import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { searchItems } from '$lib/db/items';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const searchText = params.searchText;
		//!TODO clean up this search
		let searchString = (searchText as string).trim().split(' ').join(' & ');

		return {
			items: await searchItems(searchString,client)
		};
	}catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
