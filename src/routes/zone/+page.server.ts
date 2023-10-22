import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { parseDatabaseResponse } from '$lib/utils';
import { ZoneSchema } from '$lib/schema';
import { getAllZonesByExpansion } from '$lib/db/zone';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		return {
			zones: await getAllZonesByExpansion(client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
