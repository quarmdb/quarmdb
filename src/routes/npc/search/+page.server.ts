import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { createNpcWhereString, searchNpcs } from '$lib/db/npc';
import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
import { SearchNameSchema, SearchZoneShortNameSchema } from '$lib/inputSchemas';
import { getAllZonesShortInfo } from '$lib/db/zone';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		if (url.searchParams.size === 0)
			return { zones: await getAllZonesShortInfo(5, client), npcsByZone: [] };
		let name = url.searchParams.get('name') || '';
		let zone = url.searchParams.get('zone') || 'all';
		let min_level = parseInt(url.searchParams.get('min_level') || '1');
		let max_level = parseInt(url.searchParams.get('max_level') || '100');
		let bodytype = parseInt(url.searchParams.get('bodytype') || '0');

		const nameParse = SearchNameSchema.safeParse(name);

		if (!nameParse.success) {
			console.error(`Name doesnt have letters/numbers`);
			throw error(404);
		}

		const zoneParse = SearchZoneShortNameSchema.safeParse(zone);
		if (!zoneParse.success) {
			console.error(zoneParse.error.message);
			throw error(404);
		}

		return {
			zones: await getAllZonesShortInfo(5, client),
			npcsByZone: await searchNpcs(
				createNpcWhereString({ name, zone, min_level, max_level, bodytype }),
				client
			)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
