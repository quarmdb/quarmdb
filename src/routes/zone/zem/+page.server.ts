import { ZoneSchema, type ZoneType } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	const res = await client.query<ZoneType>('SELECT * FROM zone');
	let parsedRows = ZoneSchema.array().safeParse(res.rows);

	if (!parsedRows.success) {
		console.log(parsedRows.error);
		throw error(404);
	}

	client.release();
	return {
		zones: parsedRows.data
	};
}
