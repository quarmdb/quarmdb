import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import { getAllRules } from '$lib/db/rules';
import { getAllZonesWithPullInfo } from '$lib/db/zone';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		await getAllZonesWithPullInfo(client);
		return {
			rules: await getAllRules(client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
