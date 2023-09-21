import { db } from '$lib/conn';
import { NpcTypesSchema, type NpcTypesType } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { z } from 'zod';

export async function load({ params }: PageServerLoadEvent) {
	let rows = await db.prepare('SELECT id, name, level FROM npc_types ORDER BY name').all();

	let parsedRows = z
		.array(NpcTypesSchema.pick({ id: true, name: true, level: true }))
		.safeParse(rows);

	if (!parsedRows.success) {
		console.log(parsedRows.error);
		throw error(404);
	}

	return {
		rows: parsedRows.data
	};
}
