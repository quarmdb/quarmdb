import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { getDropsForItem, getItem, getMerchantsForItem } from '$lib/db/items';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();

	try {
		let id = parseInt(params.id);
		if (typeof id !== 'number') throw error(404);

		return {
			item: await getItem(id, client),
			drops: await getDropsForItem(id, client),
			merchants: await getMerchantsForItem(id, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
