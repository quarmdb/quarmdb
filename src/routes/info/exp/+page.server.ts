import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { getAllRules, getRule } from '$lib/db/rules';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		return {
			rules: await getAllRules(client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
