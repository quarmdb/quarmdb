import { ItemsSchema, NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { Pool, PoolClient } from 'pg';
import { z } from 'zod';

export const getItem = async (id: number, client: PoolClient) => {
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

	return itemParse.data;
};

export const getDropsForItem = async (id: number, client: PoolClient) => {
	const dropnpcs = await client.query(
		`
  SELECT
    npc.name, npc.id
  From
    npc_types npc
  INNER JOIN loottable_entries lt_e ON
    npc.loottable_id = lt_e.loottable_id
  INNER JOIN lootdrop_entries ld_e ON
    lt_e.lootdrop_id = ld_e.lootdrop_id
  WHERE
    ld_e.item_id = ${id}
  `
	);

	const dropnpcsParsed = NpcTypesSchema.pick({ name: true, id: true })
		.array()
		.safeParse(dropnpcs.rows);

	if (!dropnpcsParsed.success) {
		console.log(dropnpcsParsed.error);
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

export const searchItems = async (whereString: string, client: PoolClient) => {
	let query = `
	SELECT
		items.*
	FROM
		items
	${whereString}
	ORDER BY items.name
`;

	const res = await client.query(query, []);

	const parsedItems = ItemsSchema.array().safeParse(res.rows);
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
