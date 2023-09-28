import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { parseDatabaseResponse } from '$lib/utils';
import { ZonePointsSchema } from '$lib/schema';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const res = await client.query(`
      SELECT 
        zp.*, z.short_name
      FROM 
        zone_points zp
      INNER JOIN zone z
        on zp.target_zone_id = z.id
      ORDER BY zone
    
    `);
		console.log(JSON.stringify(res.rows[0]));

		const data = parseDatabaseResponse(
			res,
			ZonePointsSchema.extend({ short_name: z.string() }).array()
		);
		return {
			zone_points: data
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
