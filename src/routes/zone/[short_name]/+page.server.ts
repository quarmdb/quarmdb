import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { NpcTypesSchema, ZoneSchema } from '$lib/schema';
import { z } from 'zod';
import { getZoneFromNumber, type ZoneIdNumberType } from '$lib/db/constants/zoneidnumber';
import {
	getConnectedZones,
	getGroundSpawns,
	getSpawnsByZone,
	getUniqueNpcsByZone,
	getZone
} from '$lib/db/zone';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let short_name = params.short_name;
		if (typeof short_name !== 'string') {
			console.error('Somehow param isnt a string');
			throw error(404);
		}

		return {
			zone: await getZone(short_name, client),
			ground_spawns: await getGroundSpawns(short_name, client),
			connected_zones: await getConnectedZones(short_name, client),
			npcs: await getUniqueNpcsByZone(short_name, client),
			spawns: await getSpawnsByZone(short_name, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
