import { ItemsSchema, type ItemsType } from '$lib/schema';
import type { z } from 'zod';
import type { PageServerLoadEvent } from './$types';
import { error } from 'console';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	const ItemsOverviewSchema = ItemsSchema.pick({ id: true, name: true, icon: true });
	type ItemsOverviewType = z.infer<typeof ItemsOverviewSchema>;

	const client = await pool.connect();
	const res = await client.query('SELECT id, name, icon FROM items ORDER BY name');

	let parsedRows = ItemsOverviewSchema.array().safeParse(res.rows);
	if (!parsedRows.success) {
		console.error(parsedRows.error);
		client.release();
		throw error(404);
	}

	client.release();
	return {
		rows: parsedRows.data
	};
}
