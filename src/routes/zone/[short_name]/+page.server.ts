import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { NpcTypesSchema, ZoneSchema } from '$lib/schema';
import { z } from 'zod';
import { getZoneFromNumber, type ZoneIdNumberType } from '$lib/db/constants/zoneidnumber';
import { getSpawnsByZone } from '$lib/db/spawns';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let short_name = params.short_name;
		if (typeof short_name !== 'string') {
			console.error('Somehow param isnt a string');
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

		// if (groundSpawnRes.rowCount === 0) {
		// 	console.error(`ground`);
		// 	throw error(404);
		// }
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

		const connectedZonesRes = await client.query(
			`
			SELECT
				target_zone_id
			FROM
				zone_points
			WHERE
				zone_points.zone = $1
		`,
			[short_name]
		);

		const connectedZonesParse = z
			.object({ target_zone_id: z.number() })
			.array()
			.safeParse(connectedZonesRes.rows);

		if (!connectedZonesParse.success) {
			console.error(connectedZonesParse.error);
			throw error(404);
		}

		let connected_zones: ZoneIdNumberType[] = [];
		connectedZonesParse.data.forEach(({ target_zone_id }) => {
			let zone = getZoneFromNumber(target_zone_id);
			if (
				!connected_zones.find((value) => {
					return zone.short_name === value.short_name;
				})
			)
				connected_zones.push(zone);
		});

		const npcsRes = await client.query(
			`
				SELECT
					npc.*
				FROM
					npc_types npc
				INNER JOIN spawnentry spen
					ON spen.npcID = npc.id
				INNER JOIN spawngroup sg
					ON sg.id = spen.spawngroupID
				INNER JOIN spawn2 sp2
					ON sp2.spawngroupID = sg.id
				WHERE
					sp2.zone = $1
			`,
			[short_name]
		);

		const parsedNpcs = NpcTypesSchema.array().safeParse(npcsRes.rows);

		if (!parsedNpcs.success) {
			console.error(parsedNpcs.error);
			throw error(404);
		}

		console.log(`Zone -> ${parsedZones.data[0].short_name}`);

		return {
			zone: parsedZones.data[0],
			ground_spawns: parsedGroundSpawns.data,
			connected_zones,
			npcs: parsedNpcs.data,
			spawns: await getSpawnsByZone(short_name, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
