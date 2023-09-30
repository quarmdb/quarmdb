import { NpcTypesSchema, type NpcTypesType } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	const searchStr = `
		SELECT 
			id, name, level 
		FROM 
			npc_types 
		WHERE 
			name !~* '^[_]+$'
			AND name !~* '^[_]+ $'
			AND name != ' '
			AND name != ''
			AND name != '#_'
			AND name != '#'
			AND name is not NULL
			AND name !~* '^[_]+[a-zA-Z_]+$'
			`;
	console.log(searchStr);
	const res = await client.query(searchStr);

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
