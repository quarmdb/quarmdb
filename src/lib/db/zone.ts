import { NpcTypesSchema, Spawn2Schema, ZoneSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { Pool, PoolClient } from 'pg';
import { z } from 'zod';
import { getZoneFromNumber, type ZoneIdNumberType } from './constants/zoneidnumber';
import { ZoneShortInfoSchema } from './constants/zone';

export const getSpawnsByZone = async (short_name: string, client: PoolClient) => {
	const spawnRes = await client.query(
		`
    SELECT
      spawn.*,
      JSON_AGG(JSON_BUILD_OBJECT(
        'npcid', npc.id,
        'name', npc.name,
        'chance', se.chance
      )) as "spawns"
    FROM 
      spawn2 spawn
    INNER JOIN spawnentry se
      ON se.spawngroupID = spawn.spawngroupID
    INNER JOIN npc_types npc
      ON npc.id = se.npcID
    WHERE
      spawn.zone = $1
    GROUP BY
      spawn.id
  `,
		[short_name]
	);

	if (spawnRes.rowCount === 0) {
		console.error(`spawnRes.rowCount === 0`);
	}

	const SpawnsByZoneSchema = Spawn2Schema.extend({
		spawns: z
			.object({
				npcid: z.number(),
				name: z.string(),
				chance: z.number()
			})
			.array()
	});

	const spawnsParsed = SpawnsByZoneSchema.array().safeParse(spawnRes.rows);

	if (!spawnsParsed.success) {
		console.error(spawnsParsed.error);
		throw error(404);
	}

	return spawnsParsed.data;
};

export const getUniqueNpcsByZone = async (short_name: string, client: PoolClient) => {
	const npcsRes = await client.query(
		`
			SELECT DISTINCT
				npc.*
			FROM
				npc_types npc
			INNER JOIN spawnentry spen
				ON spen.npcID = npc.id
			INNER JOIN spawn2 sp2
				ON sp2.spawngroupID = spen.spawngroupID
			WHERE
				sp2.zone = $1
			ORDER BY
				npc.name
		`,
		[short_name]
	);

	const parsedNpcs = NpcTypesSchema.array().safeParse(npcsRes.rows);

	if (!parsedNpcs.success) {
		console.error(parsedNpcs.error);
		throw error(404);
	}

	return parsedNpcs.data;
};

export const getConnectedZones = async (short_name: string, client: PoolClient) => {
	const connectedZonesRes = await client.query(
		`
		SELECT DISTINCT
			target_zone_id
		FROM
			zone_points
		WHERE
			zone_points.zone = $1
	`,
		[short_name]
	);

	const connectedZonesParse = z
		.object({ target_zone_id: z.number() })
		.array()
		.safeParse(connectedZonesRes.rows);

	if (!connectedZonesParse.success) {
		console.error(connectedZonesParse.error);
		throw error(404);
	}

	let connected_zones: ZoneIdNumberType[] = [];
	connectedZonesParse.data.forEach(({ target_zone_id }) => {
		connected_zones.push(getZoneFromNumber(target_zone_id));
	});

	return connected_zones;
};

export const getGroundSpawns = async (short_name: string, client: PoolClient) => {
	const groundSpawnRes = await client.query(
		`
		SELECT 
			i.name, i.id, i.icon,
			JSON_AGG(JSON_BUILD_OBJECT(
				'x', gs.max_x,
				'y', gs.max_y,
				'z', gs.max_z
			)) as locs
		FROM
			ground_spawns gs
		INNER JOIN zone z
			ON z.zoneidnumber = gs.zoneid
		INNER JOIN items i
			ON i.id = gs.item
		WHERE
			z.short_name = $1
		GROUP BY
			i.name, i.id, i.icon
	`,
		[short_name]
	);

	// if (groundSpawnRes.rowCount === 0) {
	// 	console.error(`ground`);
	// 	throw error(404);
	// }
	const parsedGroundSpawns = z
		.object({
			name: z.string(),
			id: z.number(),
			icon: z.number(),
			locs: z
				.object({
					x: z.number(),
					y: z.number(),
					z: z.number()
				})
				.array()
		})
		.array()
		.safeParse(groundSpawnRes.rows);

	if (!parsedGroundSpawns.success) {
		console.error(parsedGroundSpawns.error);
		throw error(404);
	}

	return parsedGroundSpawns.data;
};

export const getZone = async (short_name: string, client: PoolClient) => {
	const zoneRes = await client.query(
		`
		SELECT 
			zone.*,
			(SELECT rv.rule_value FROM rule_values rv WHERE rv.rule_name = 'Quarm:RespawnReductionNewbiePullLimit' ) as newbie_pull_limit,
			(SELECT rv.rule_value FROM rule_values rv WHERE rv.rule_name = 'Quarm:RespawnReductionStandardPullLimit' ) as reduced_pull_limit
		from zone where zone.short_name = $1`,
		[short_name]
	);
	if (zoneRes.rowCount === 0) throw error(404);
	const parsedZones = ZoneSchema.extend({
		newbie_pull_limit: z.string(),
		reduced_pull_limit: z.string()
	})
		.array()
		.safeParse(zoneRes.rows);
	if (!parsedZones.success) {
		console.error(parsedZones.error);
		throw error(404);
	}

	return parsedZones.data[0];
};

export const getAllZonesShortInfo = async (expansion: number, client: PoolClient) => {
	const result = await client.query(
		`
		SELECT
			id, short_name, long_name, expansion
		FROM
			zone
		WHERE
			expansion <= $1
		ORDER BY
			expansion, short_name
	`,
		[expansion]
	);

	//console.log(result);
	let parsed = ZoneShortInfoSchema.array().safeParse(result.rows);

	if (!parsed.success) {
		console.error(parsed.error);
		return [];
	}

	return parsed.data;
};

export const getAllZones = async (client: PoolClient) => {
	const zoneRes = await client.query(`SELECT * FROM ZONE`);
	if (zoneRes.rowCount === 0) throw error(404);
	const parsedZones = ZoneSchema.array().safeParse(zoneRes.rows);
	if (!parsedZones.success) {
		console.error(parsedZones.error);
		throw error(404);
	}

	return parsedZones.data;
};

export const getAllZonesWithPullInfo = async (client: PoolClient) => {
	const result = await client.query(
		`
		SELECT
			z.*,
			( SELECT rv.rule_value FROM rule_values rv WHERE rv.rule_name = 'Quarm:RespawnReductionNewbiePullLimit' ) as newbie_pull_limit,
			( SELECT rv.rule_value FROM rule_values rv WHERE rv.rule_name = 'Quarm:RespawnReductionStandardPullLimit' ) as reduced_pull_limit
		FROM
			zone z
		`
	);

	if (result.rowCount === 0) throw error(404);
	const parsed = ZoneSchema.extend({
		newbie_pull_limit: z.string(),
		reduced_pull_limit: z.string()
	})
		.array()
		.safeParse(result.rows);

	if (!parsed.success) {
		console.error(parsed.error);
		throw error(404);
	}

	return parsed.data;
};
