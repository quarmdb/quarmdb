import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { FactionListSchema, NpcTypesSchema, Spawn2Schema } from '$lib/schema';
import { z } from 'zod';
import { getNpc, getSpawnChanceByNPC } from '$lib/db/npc';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let id = parseInt(params.id);
		if (typeof id !== 'number') {
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
				i.icon,
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

		const LootSchema = z.object({
			name: z.string(),
			icon: z.number(),
			id: z.number(),
			chance: z.number()
		});

		//if (lootRes.rowCount === 0) throw error(404);
		const lootParse = LootSchema.array().safeParse(lootRes.rows);
		if (!lootParse.success) {
			console.error(lootParse.error.errors);
			throw error(404);
		}

		const factionRes = await client.query(
			`
			SELECT
				fl.*,
				nfe.value
			FROM
				faction_list fl
			INNER JOIN npc_faction_entries nfe
				ON nfe.faction_id = fl.id
			INNER JOIN npc_faction nf
				ON nf.id = nfe.npc_faction_id
			INNER JOIN npc_types npc
				ON npc.npc_faction_id = nf.id
			WHERE
				nfe.value != 0 AND npc.id = $1
			`,
			[id]
		);

		const factionParse = FactionListSchema.extend({ value: z.number() })
			.array()
			.safeParse(factionRes.rows);

		if (!factionParse.success) {
			console.error(factionParse.error);
			throw error(404);
		}

		return {
			npc: await getNpc(id, client),
			spawns: await getSpawnChanceByNPC(id, client),
			loot: lootParse.data,
			factions: factionParse.data
		};
	} catch (err) {
		throw err;
	} finally {
		client.release();
	}
}
