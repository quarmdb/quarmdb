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
        zp.*
      FROM 
        zone_points zp
      ORDER BY zone
    
    `);

		const data = parseDatabaseResponse(res, ZonePointsSchema.array());
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
