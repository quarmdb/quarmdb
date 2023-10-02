import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { getAllSpellsByClass, getAllSpellsByClassByLevel } from '$lib/db/classes';
import { error } from '@sveltejs/kit';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const name = params.name;
		if (typeof name !== 'string') {
			console.error('/class/[name] - Somehow param isnt a string');
			throw error(404);
		}

		return {
			spellsByLevel: await getAllSpellsByClassByLevel(name, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
