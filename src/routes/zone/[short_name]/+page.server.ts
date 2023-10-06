import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import {
	getConnectedZones,
	getGroundSpawns,
	getSpawnsByZone,
	getUniqueNpcsByZone,
	getZone
} from '$lib/db/zone';
import { getRule } from '$lib/db/rules';

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
			respawn_reduction_rule: await getRule('Quarm:EnableRespawnReductionSystem', client),
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
