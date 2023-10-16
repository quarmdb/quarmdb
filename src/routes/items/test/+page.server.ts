import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import type { z } from 'zod';
import { searchItemCardData, type ItemsCardSchema } from '$lib/db/items';
import { getRandomInt } from '$lib/utils';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let wheres = [];
		wheres.push(` WHERE i.`);
		wheres.push(` WHERE i.clickeffect > 0 `);
		wheres.push(` WHERE i.worneffect > 0  `);
		wheres.push(` WHERE i.proceffect > 0  `);
		wheres.push(` WHERE i.bardeffect > 0  `);
		wheres.push(` WHERE i.scrolleffect > 0 `);

		let items: z.infer<typeof ItemsCardSchema>[] = [];

		for (let i = 0; i < wheres.length; i++) {
			const where = wheres[i];
			try {
				let searchedItems = await searchItemCardData(where, 15, client);
				const item = searchedItems.at(getRandomInt(searchedItems.length));
				if (item !== undefined) items.push(item);
			} catch (err) {
				console.error(err);
			}
		}

		if (items === undefined) throw error(404);
		console.log(`items.length = ${items.length}`);

		return {
			items
		};
	} catch (err) {
		console.error(err);
	} finally {
		client.release();
	}
}
