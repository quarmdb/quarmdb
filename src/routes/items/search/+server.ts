import { ItemsSchema, NpcTypesSchema } from '$lib/schema';
import type { RequestHandler } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const client = await pool.connect();
	try {
		const { searchText } = await request.json();
		let searchString = searchText.split(' ').join(',');
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
		return new Response(JSON.stringify(res.rows));
	} finally {
		client.release();
	}
}
