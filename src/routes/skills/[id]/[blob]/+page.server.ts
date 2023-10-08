import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { getRecipes } from '$lib/db/skills';
import { getSkillById } from '$lib/db/constants/skills';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		let id = parseInt(params.id);
		if (typeof id !== 'number') {
			throw error(404);
		}

		return {
			skill: getSkillById(id),
			recipes: await getRecipes(id, client)
		};
	} catch (err) {
		console.error(err);
		throw error(404);
	} finally {
		client.release();
	}
}
