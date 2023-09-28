import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { ZoneSchema } from '$lib/schema';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let short_name = params.short_name;
		if (typeof short_name !== 'string') {
			throw error(404);
		}
		const res = await client.query(`SELECT * from zone where zone.short_name = $1`, [short_name]);
		if (res.rowCount === 0) throw error(404);
		const parsedZones = ZoneSchema.array().safeParse(res.rows);
		if (!parsedZones.success) {
			console.error(parsedZones.error);
			throw error(404);
		}
		return {
			zone: parsedZones.data[0]
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
