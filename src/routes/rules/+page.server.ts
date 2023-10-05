import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import { getAllRules } from '$lib/db/rules';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
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
