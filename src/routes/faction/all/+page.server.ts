import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import { FactionListSchema } from '$lib/schema';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const factionsRes = await client.query(`
      SELECT
        *
      FROM
        faction_list
      ORDER BY
        name
      `);

		if (factionsRes.rowCount === 0) {
			console.error(`factionsRes.rowCount === 0)`);
			throw error(404);
		}

		const factionParse = FactionListSchema.array().safeParse(factionsRes.rows);
		if (!factionParse.success) {
			console.error(factionParse.error);
			throw error(404);
		}

		return {
			factions: factionParse.data
		};
	} catch (err) {
		console.log(err);
	} finally {
		const rel = client.release();
		console.log(`Client Released with ${rel}`);
	}
}
