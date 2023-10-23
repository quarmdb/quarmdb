import { ItemsSchema, NpcTypesSchema, SpellsNewSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';

import type { PoolClient } from 'pg';
import { z } from 'zod';

export const getItem = async (id: number, client: PoolClient) => {
	/*
	let result = await client.query(
		`
  SELECT
    *
  FROM
    items
  WHERE
    items.id = ${id}
  `
	);
	const itemParse = ItemsSchema.safeParse(result.rows[0]);

	if (!itemParse.success) {
		console.error(itemParse.error);
		throw error(404);
	}
	*/

	return (await searchItemCardData(`WHERE i.id = ${id} `, 1, client))[0];
};

export const NPCDropsSchema = z.object({
	name: z.string(),
	id: z.number(),
	zone: z.string(),
	chances: z.number().array()
});

export type NPCDropsType = z.infer<typeof NPCDropsSchema>;

export const getDropsForItem = async (id: number, client: PoolClient) => {
	const dropnpcs = await client.query(
		`
  SELECT
    npc.name, npc.id, sp2.zone,
		JSON_AGG(ld_e.chance) chances
  From
    npc_types npc
  INNER JOIN loottable_entries lt_e ON
    npc.loottable_id = lt_e.loottable_id
  INNER JOIN lootdrop_entries ld_e ON
    lt_e.lootdrop_id = ld_e.lootdrop_id
	INNER JOIN spawnentry se
		ON se.npcID = npc.id
	INNER JOIN spawn2 sp2
		ON sp2.spawngroupID = se.spawngroupID
  WHERE
    ld_e.item_id = $1
	GROUP BY npc.id, npc.name, sp2.zone
  `,
		[id]
	);

	const dropnpcsParsed = NPCDropsSchema.array().safeParse(dropnpcs.rows);

	if (!dropnpcsParsed.success) {
		console.log(dropnpcsParsed.error.message);
		throw error(404);
	}

	return dropnpcsParsed.data;
};

export const getMerchantsForItem = async (id: number, client: PoolClient) => {
	const merchantsRes = await client.query(
		`
  SELECT
    s2.zone,
    JSON_AGG(JSON_BUILD_OBJECT(
      'name', npc.name,
      'npcid', npc.id,
      'merchantid', npc.merchant_id
    )) as merchants
  FROM
    npc_types npc
  INNER JOIN merchantlist ml
    ON npc.merchant_id = ml.merchantid
  INNER JOIN spawnentry se
    ON npc.id = se.npcID
  INNER JOIN spawn2 s2
    ON s2.spawngroupID = se.spawngroupID
  WHERE
    ml.item = $1
  GROUP BY
    s2.zone
  `,
		[id]
	);

	const MerchantsSchema = z.object({
		zone: z.string(),
		merchants: z
			.object({
				name: z.string(),
				npcid: z.number(),
				merchantid: z.number()
			})
			.array()
	});

	if (merchantsRes.rowCount === 0) {
		console.error(`getMerchantsForItem() : merchantsRes.rowCount === 0`);
		//throw error(404);
	}

	const merchantsParse = MerchantsSchema.array().safeParse(merchantsRes.rows);

	if (!merchantsParse.success) {
		console.error(merchantsParse.error);
		throw error(404);
	}

	return merchantsParse.data;
};

export const searchItemsLowData = async (
	whereString: string,
	client: PoolClient
) => {
	let query = `
	SELECT
		id, name, icon, min_expansion, max_expansion
	FROM
		items
	${whereString}
	ORDER BY items.name
`;

	const res = await client.query(query, []);

	const parsedItems = ItemsSchema.pick({
		id: true,
		name: true,
		icon: true,
		min_expansion: true,
		max_expansion: true
	})
		.array()
		.safeParse(res.rows);
	if (!parsedItems.success) {
		console.error(error);
		throw error(404);
	}
	return parsedItems.data;
};

export const ItemsSearchSchema = ItemsSchema.pick({
	icon: true,
	id: true,
	name: true,
	itemtype: true
});
export type ItemsSearchType = z.infer<typeof ItemsSearchSchema>;

export const getAllBags = async (client: PoolClient) => {
	const result = await client.query(`SELECT * FROM items WHERE bagtype != 0`);
	const parse = ItemsSchema.array().safeParse(result.rows);
	if (!parse.success) {
		console.error(parse.error.message);
		throw error(404);
	}

	return parse.data;
};

export const searchItemCardData = async (
	whereString: string,
	limit: number,
	client: PoolClient
) => {
	let query = `
	SELECT
		i.id, i.name,
		JSON_AGG(i.*) as details,
		JSON_AGG(proc.*) as proc,
		JSON_AGG(worn.*) as worn,
		JSON_AGG(click.*) as click,
		JSON_AGG(scroll.*) as scroll
	FROM
		items i
	LEFT JOIN spells_new proc		 	
		ON i.proceffect = proc.id
	LEFT JOIN spells_new worn
		ON i.worneffect = worn.id
	LEFT JOIN spells_new click
		ON i.clickeffect = click.id
	LEFT JOIN spells_new scroll
		ON i.scrolleffect = scroll.id
	${whereString} 
	GROUP BY i.id, i.name
	ORDER BY i.name
`;
	if (limit > 0) query += ` LIMIT ${limit}`;
	//console.log(query);

	const result = await client.query(query);
	console.log(`results = ${result.rowCount}`);

	const parsed = ItemsCardPreprocessedSchema.array().safeParse(result.rows);
	if (!parsed.success) {
		console.error(parsed.error.message);
		throw error(404);
	}

	let processed: ItemsCardType[] = [];

	parsed.data.forEach((row) => {
		processed.push({
			id: row.id,
			name: row.name,
			details: row.details[0],
			proc: row.proc === null ? null : row.proc[0],
			worn: row.worn === null ? null : row.worn[0],
			click: row.click === null ? null : row.click[0],
			scroll: row.scroll === null ? null : row.scroll[0]
		});
	});

	return processed;
};

const ItemsCardPreprocessedSchema = z.object({
	id: z.number(),
	name: z.string(),
	details: ItemsSchema.array(),
	proc: SpellsNewSchema.nullable().array(),
	worn: SpellsNewSchema.nullable().array(),
	click: SpellsNewSchema.nullable().array(),
	scroll: SpellsNewSchema.nullable().array()
});

export const ItemsCardSchema = z.object({
	id: z.number(),
	name: z.string(),
	details: ItemsSchema,
	proc: SpellsNewSchema.nullable(),
	worn: SpellsNewSchema.nullable(),
	click: SpellsNewSchema.nullable(),
	scroll: SpellsNewSchema.nullable()
});

export type ItemsCardType = z.infer<typeof ItemsCardSchema>;
