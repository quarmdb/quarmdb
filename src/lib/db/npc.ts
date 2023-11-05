import { NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { z } from 'zod';
import { getZoneFromShortName } from './constants/zoneidnumber';
import { errorMonitor } from 'events';

type WhereStringOptionsType = {
	name: string;
	zone: string;
	min_level: number;
	max_level: number;
	bodytype: number;
};

export const createNpcWhereString = (opts: WhereStringOptionsType) => {
	let whereArray = [];
	if (opts.name.trim() !== '') {
		let name = (opts.name as string).trim().split(' ').join(' & ');
		whereArray.push(
			`to_tsvector(REPLACE(REPLACE(name, '_', ' '), '#', '')) @@ to_tsquery('${name}')`
		);
	}

	if (opts.zone !== 'all') {
		console.log(
			`getZoneFromShortName(zone).id = ${getZoneFromShortName(opts.zone).id}`
		);
		if (getZoneFromShortName(opts.zone).id !== 0)
			whereArray.push(`s2.zone = '${opts.zone}'`);
		else console.log(`SOMEONE TRIED TO SQL INJECT IN ZONE: ${opts.zone}`);
	}

	if (opts.bodytype !== 0) {
		whereArray.push(`npc.bodytype = ${opts.bodytype}`);
	}

	let levelStr = `(
		(npc.maxlevel = 0 AND (npc.level <@ int8range(${opts.min_level},${opts.max_level}, '[]')))
			OR 
		(npc.maxlevel != 0 AND (int8range(${opts.min_level},${opts.max_level}, '[]') && int8range(npc.level, npc.maxlevel, '[]')))
	)`;

	whereArray.push(levelStr);

	let whereString = '';
	if (whereArray.length !== 0)
		whereString = ' WHERE ' + whereArray.join(' AND ');

	return whereString;
};

export const searchNpcs = async (whereString: string, client: PoolClient) => {
	let query = `
  SELECT zone, JSON_AGG(JSON_BUILD_OBJECT('id',id,'name',REPLACE(REPLACE(name, '_', ' '), '#', ''),'level', level, 'maxlevel', maxlevel, 'bodytype', bodytype)) as npcs FROM
  (SELECT DISTINCT
    s2.zone,
    npc.*
  FROM
    npc_types npc
  LEFT JOIN spawnentry se
    ON se.npcID = npc.id
  LEFT JOIN spawn2 s2
    ON s2.spawngroupId = se.spawngroupID
  ${whereString}
  )
  GROUP BY zone
  ORDER BY zone
  `;

	console.log(query);

	const res = await client.query(query, []);

	const parsedNpcs = NpcTypesSearchSchema.array().safeParse(res.rows);
	if (!parsedNpcs.success) {
		console.error(parsedNpcs.error.message);
		throw error(404);
	}
	return parsedNpcs.data;
};

export const NpcTypesSearchSchema = z.object({
	zone: z.string().nullable(),
	npcs: z
		.object({
			id: z.number(),
			name: z.string(),
			level: z.number(),
			maxlevel: z.number(),
			bodytype: z.number()
		})
		.array()
});
export type NpcTypesSearchType = z.infer<typeof NpcTypesSearchSchema>;

export const getNpc = async (id: number, client: PoolClient) => {
	const npcRes = await client.query({
		text: `
    SELECT 
      npc_types.*, 
      races.name as racename
    FROM 
      npc_types 
    INNER JOIN races ON 
      races.id = npc_types.race 
    WHERE npc_types.id = $1
  `,
		values: [id]
	});

	if (npcRes.rowCount === 0) {
		console.error(`npcRes rowcount === 0`);
		throw error(404);
	}
	const npcParse = NpcTypesSchema.extend({
		racename: z.coerce.string()
	}).safeParse(npcRes.rows[0]);

	if (!npcParse.success) {
		console.error(npcParse.error.errors);
		throw error(404);
	}
	return npcParse.data;
};

export const NPCSpawnChanceSchema = z.object({
	zone: z.string(),
	spawninfo: z
		.object({
			spawngroupID: z.number(),
			chance: z.number(),
			respawntime: z.number(),
			x: z.number(),
			y: z.number(),
			z: z.number()
		})
		.array()
});

export const getSpawnChanceByNPC = async (id: number, client: PoolClient) => {
	const result = await client.query(
		`
    SELECT
      zone,
			JSON_AGG(JSON_BUILD_OBJECT(
				'spawngroupID', spawn.spawngroupID,
				'chance', se.chance,
				'respawntime', spawn.respawntime,
				'x', spawn.x,
				'y', spawn.y,
				'z', spawn.z
			)) spawninfo
		FROM 
			npc_types npc
		INNER JOIN spawnentry se
			ON npc.id = se.npcID
    INNER JOIN spawn2 spawn
      ON spawn.spawngroupID = se.spawngroupID
    WHERE
      npc.id = $1
    GROUP BY
      zone
  `,
		[id]
	);

	const parse = NPCSpawnChanceSchema.array().safeParse(result.rows);
	if (!parse.success) {
		console.error(parse.error.message);
		throw error(404);
	}

	return parse.data;
};

export const CoinDropSchema = z.object({
	mincash: z.number().default(0),
	maxcash: z.number().default(0),
	avgcoin: z.number().default(0)
});

export const getCoinDropFromNpc = async (id: number, client: PoolClient) => {
	const result = await client.query(
		`
  SELECT
    lt.mincash, lt.maxcash, lt.avgcoin
  FROM
    loottable lt
  INNER JOIN npc_types npc ON
    npc.loottable_id = lt.id
  WHERE
    npc.id = $1
  `,
		[id]
	);

	if (result.rowCount === 0) {
		console.error(`getCointDropFromNpc.rowCount === 0`);
		return {
			mincash: 0,
			maxcash: 0,
			avgcoin: 0
		};
	}

	const parse = CoinDropSchema.safeParse(result.rows[0]);
	if (!parse.success) {
		console.error(parse.error.message);
		throw error(404);
	}

	return parse.data;
};
