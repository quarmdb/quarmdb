import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { ZoneSchema } from '$lib/schema';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let short_name = params.short_name;
		if (typeof short_name !== 'string') {
			throw error(404);
		}
		const zoneRes = await client.query(`SELECT * from zone where zone.short_name = $1`, [
			short_name
		]);
		if (zoneRes.rowCount === 0) throw error(404);
		const parsedZones = ZoneSchema.array().safeParse(zoneRes.rows);
		if (!parsedZones.success) {
			console.error(parsedZones.error);
			throw error(404);
		}

		const groundSpawnRes = await client.query(
			`
      SELECT 
        i.name, i.id,
        gs.max_x as x, gs.max_y as y, gs.max_z as z
      FROM
        ground_spawns gs
      INNER JOIN zone z
        ON z.zoneidnumber = gs.zoneid
      INNER JOIN items i
        ON i.id = gs.item
      WHERE
        z.short_name = $1
    `,
			[short_name]
		);

		if (groundSpawnRes.rowCount === 0) throw error(404);
		const parsedGroundSpawns = z
			.object({
				name: z.string(),
				id: z.number(),
				x: z.number(),
				y: z.number(),
				z: z.number()
			})
			.array()
			.safeParse(groundSpawnRes.rows);

		if (!parsedGroundSpawns.success) {
			console.error(parsedGroundSpawns.error);
			throw error(404);
		}

		return {
			zone: parsedZones.data[0],
			ground_spawns: parsedGroundSpawns.data
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
