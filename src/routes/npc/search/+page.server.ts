import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { createNpcWhereString, searchNpcs } from '$lib/db/npc';
import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';

export async function load({ url }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		if (url.searchParams.size === 0) return { npcsByZone: [] };
		let name = url.searchParams.get('name') || '';
		let zone = url.searchParams.get('zone') || 'all';
		let min_level = parseInt(url.searchParams.get('min_level') || '1');
		let max_level = parseInt(url.searchParams.get('max_level') || '100');
		let bodytype = parseInt(url.searchParams.get('bodytype') || '0');

		return {
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
