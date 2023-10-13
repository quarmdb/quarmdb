import { SpellsNewSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';

export const getSpellById = async (id: number, client: PoolClient) => {
	const result = await client.query(
		`
    SELECT
      *
    FROM
      spells_new
    WHERE
      id = $1
  `,
		[id]
	);

	const parse = SpellsNewSchema.array().safeParse(result.rows);

	if (!parse.success) {
		console.error(parse.error.message);
		throw error(404);
	}

	if (parse.data.length !== 1) throw error(404);
	return parse.data[0];
};
