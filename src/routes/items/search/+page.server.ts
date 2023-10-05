import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { searchItems } from '$lib/db/items';
import { ItemSlots } from '$lib/db/constants/item';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		if (url.searchParams.size === 0) return { items: [] };
		let name = url.searchParams.get('name') || '';
		let type = url.searchParams.get('type') || 'all';
		let slot = url.searchParams.get('slot') || 'all';

		let whereString = [];
		if (name.trim() !== '') {
			name = (name as string).trim().split(' ').join(' & ');
			whereString.push(`to_tsvector(items.name) @@ to_tsquery('${name}')`);
		}

		if (type !== 'all') {
			whereString.push(`items.itemtype = ${parseInt(type)}`);
		}

		if (slot !== 'all') {
			try {
				let slotmask = parseInt(slot);

				//fix this for multiple slots
				slotmask = ItemSlots[slotmask].mask;
				whereString.push(`items.slots = ${slotmask}`);
			} catch (e) {
				console.error(`Someone sent a not good slotmask: ${slot}`);
			}
		}

		console.log(whereString.join(' AND '));

		return {
			items: await searchItems(whereString.join(' AND '), client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
