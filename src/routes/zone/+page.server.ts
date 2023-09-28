import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { parseDatabaseResponse } from '$lib/utils';
import { ZoneSchema } from '$lib/schema';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const res = await client.query(`SELECT * FROM zone`);
		const data = parseDatabaseResponse(res, ZoneSchema.array());
		return {
			zones: data
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
