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

		if (npcRes.rowCount === 0) throw error(404);
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

		if (spawnRes.rowCount === 0) throw error(404);
		const spawnParse = Spawn2Schema.array().safeParse(spawnRes.rows);
		if (!spawnParse.success) {
			console.error(spawnParse.error.errors);
			throw error(404);
		}
		const spawn = spawnParse.data;

		return {
			npc: npcParse.data,
			spawn: spawnParse.data
		};
	} catch (err) {
		throw err;
	} finally {
		client.release();
	}
}
