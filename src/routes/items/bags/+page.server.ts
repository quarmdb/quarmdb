import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import {
	getDropsForItem,
	getItem,
	getMerchantsForItem,
	searchItemCardData
} from '$lib/db/items';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();

	try {
		return {
			bags: await searchItemCardData(`WHERE i.bagtype != 0`, 0, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
