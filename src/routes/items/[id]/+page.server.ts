import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { getItem } from '$lib/db/items';
import { goto } from '$app/navigation';
import { urlBlob } from '$lib/utils';
import { getNpc } from '$lib/db/npc';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	let url = '';
	try {
		let id = parseInt(params.id);
		if (typeof id !== 'number') {
			throw error(404);
		}

		const item = await getItem(id, client);

		url = '/items/' + id + '/' + urlBlob(item.name);
		console.log(`throwing to new ${url}`);
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
	throw redirect(308, url);
}
