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

		let whereArray = [];
		if (name.trim() !== '') {
			name = (name as string).trim().split(' ').join(' & ');
			whereArray.push(`to_tsvector(npc.name) @@ to_tsquery('${name}')`);
		}

		if (zone !== 'all') {
			console.log(`getZoneFromShortName(zone).id = ${getZoneFromShortName(zone).id}`);
			if (getZoneFromShortName(zone).id !== 0) whereArray.push(`s2.zone = '${zone}'`);
			else console.log(`SOMEONE TRIED TO SQL INJECT IN ZONE: ${zone}`);
		}

		let whereString = '';
		if (whereArray.length !== 0) whereString = ' WHERE ' + whereArray.join(' AND ');

		return {
			npcsByZone: await searchNpcs(createNpcWhereString({name, zone, min_level, max_level}), client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
