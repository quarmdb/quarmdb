import { NpcTypesSchema, type NpcTypesType } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	const res = await supabase.from('npc_types').select(`id, name, level`);
	//let rows = await supabase.from('SELECT id, name, level FROM npc_types ORDER BY name');

	if (res.error) throw error(404);

	let parsedRows = NpcTypesSchema.pick({ id: true, name: true, level: true })
		.array()
		.safeParse(res.data);

	if (!parsedRows.success) {
		console.log(parsedRows.error);
		throw error(404);
	}

	return {
		rows: parsedRows.data
	};
}
