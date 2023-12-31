import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { searchItemsLowData } from '$lib/db/items';
import { ItemSlots } from '$lib/db/constants/item';
import { SearchNameSchema } from '$lib/inputSchemas';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		if (url.searchParams.size === 0) return { items: [] };
		let name = url.searchParams.get('name') || '';
		let type = url.searchParams.get('type') || 'all';
		let slot = url.searchParams.get('slot') || 'all';

		const nameParse = SearchNameSchema.safeParse(name);

		if (!nameParse.success) {
			console.error(`Name doesnt have letters/numbers`);
			throw error(404);
		}

		let whereArray = [];
		if (name.trim() !== '') {
			name = (name as string).trim().split(' ').join(' & ');
			whereArray.push(`to_tsvector(items.name) @@ to_tsquery('${name}')`);
		}

		if (type !== 'all') {
			whereArray.push(`items.itemtype = ${parseInt(type)}`);
		}

		if (slot !== 'all') {
			try {
				let slotmask = parseInt(slot);

				//fix this for multiple slots
				slotmask = ItemSlots[slotmask].mask;
				whereArray.push(`items.slots = ${slotmask}`);
			} catch (e) {
				console.error(`Someone sent a not good slotmask: ${slot}`);
			}
		}

		let whereString = '';
		if (whereArray.length !== 0)
			whereString = ' WHERE ' + whereArray.join(' AND ');

		return {
			items: await searchItemsLowData(whereString, client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
