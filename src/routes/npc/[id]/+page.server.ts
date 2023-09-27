import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { NpcTypesSchema, Spawn2Schema } from '$lib/schema';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let id = parseInt(params.id);
		if (typeof id !== 'number') {
			throw error(404);
		}

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
		const npcParse = NpcTypesSchema.extend({ racename: z.coerce.string() }).safeParse(
			npcRes.rows[0]
		);

		if (!npcParse.success) {
			console.error(npcParse.error.errors);
			throw error(404);
		}

		const spawnRes = await client.query({
			text: `
		SELECT
			*
		FROM 
			spawn2 sp2
		INNER JOIN spawnentry ON
			spawnentry.spawngroupID = sp2.spawngroupID
		WHERE
			spawnentry.npcID = $1
	`,
			values: [id]
		});

		if (spawnRes.rowCount === 0) {
			console.error(`spawnRes rowcount === 0`);
			//throw error(404);
		}

		const spawnParse = Spawn2Schema.array().safeParse(spawnRes.rows);
		if (!spawnParse.success) {
			console.error(spawnParse.error.errors);
			throw error(404);
		}
		const spawn = spawnParse.data;

		const lootRes = await client.query({
			text: `
			SELECT
				i.name,
				i.id,
				drop.chance
			FROM
				items i
			INNER JOIN lootdrop_entries drop
				ON i.id = drop.item_id
			INNER JOIN loottable_entries tbl
				ON tbl.lootdrop_id = drop.lootdrop_id
			INNER JOIN npc_types npc
				ON npc.loottable_id = tbl.loottable_id
			WHERE
				npc.id = $1
			`,
			values: [id]
		});

		const LootSchema = z.object({ name: z.string(), id: z.number(), chance: z.number() });

		//if (lootRes.rowCount === 0) throw error(404);
		const lootParse = LootSchema.array().safeParse(lootRes.rows);
		if (!lootParse.success) {
			console.error(lootParse.error.errors);
			throw error(404);
		}

		return {
			npc: npcParse.data,
			spawn: spawnParse.data,
			loot: lootParse.data
		};
	} catch (err) {
		throw err;
	} finally {
		client.release();
	}
}
