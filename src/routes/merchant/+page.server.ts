import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { ItemsSchema, MerchantlistSchema, NpcTypesSchema } from '$lib/schema';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const merchantRes = await client.query(`
      SELECT
        npc.name as npcname,
        npc.id as npcid,
        JSON_AGG(JSON_BUILD_OBJECT(
          'id', i.id,
          'name', i.name
        )) as "items"
      FROM
        npc_types npc
      INNER JOIN merchantlist ml
        ON npc.merchant_id = ml.merchantid
      INNER JOIN items i
        ON ml.item = i.id
      GROUP BY
        npc.id
      ORDER BY
        npc.name
      LIMIT 250
    `);

		if (merchantRes.rowCount === 0) {
			console.error(`merchantRes.rowCount === 0`);
			throw error(404);
		}

		const merchantParse = z
			.object({
				npcname: z.string(),
				npcid: z.number(),
				items: z
					.object({
						id: z.number(),
						name: z.string()
					})
					.array()
			})
			.array()
			.safeParse(merchantRes.rows);

		if (!merchantParse.success) {
			console.error(merchantParse.error);
			throw error(404);
		}

		return {
			merchants: merchantParse.data
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
