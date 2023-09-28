import { ItemsSchema, NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { ZoneSchema } from '$lib/schema';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const searchText = params.searchText;
		//!TODO clean up this search
		let searchString = (searchText as string).trim().split(' ').join(' & ');
		const res = await client.query(
			`
			SELECT
				*
			FROM
				items
			WHERE
				to_tsvector(items.name) @@ to_tsquery($1)
		`,
			[searchString]
		);
		const parsedItems = ItemsSchema.array().safeParse(res.rows);
		if (!parsedItems.success) {
			console.error(error);
			throw error(404);
		}
		return {
			items: parsedItems.data
		};
	} finally {
		client.release();
	}
}
