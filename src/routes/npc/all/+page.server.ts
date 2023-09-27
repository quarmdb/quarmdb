import { NpcTypesSchema, type NpcTypesType } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	const res = await client.query('SELECT id, name, level FROM npc_types ORDER BY name');

	let parsedRows = NpcTypesSchema.pick({ id: true, name: true, level: true })
		.array()
		.safeParse(res.rows);

	if (!parsedRows.success) {
		console.log(parsedRows.error);
		client.release();
		throw error(404);
	}

	client.release();
	return {
		rows: parsedRows.data
	};
}
