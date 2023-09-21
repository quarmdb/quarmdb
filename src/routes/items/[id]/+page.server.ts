import { error } from '@sveltejs/kit';
import { db } from '../../../lib/conn';
import type { PageServerLoadEvent } from './$types';
import { ItemsSchema, NpcTypesSchema } from '$lib/schema';

export async function load({ params }: PageServerLoadEvent) {
	let id = parseInt(params.id);
	if (typeof id !== 'number') throw error(404);

	const row = db.prepare('SELECT * FROM items WHERE id = ?').get(params.id);
	const parsedRow = ItemsSchema.passthrough().safeParse(row);

	if (!parsedRow.success) {
		console.log(parsedRow.error);
		throw error(404);
	}

	const dropnpcs = db
		.prepare(
			`
		SELECT 
			npc.name, npc.id 
		From 
			npc_types npc
		INNER JOIN loottable_entries lt_e ON 
			npc.loottable_id = lt_e.loottable_id
		INNER JOIN lootdrop_entries ld_e ON
			lt_e.lootdrop_id = ld_e.lootdrop_id
		WHERE
			ld_e.item_id = ?
		`
		)
		.all(id);

	const dropnpcsParsed = NpcTypesSchema.pick({ name: true, id: true }).array().safeParse(dropnpcs);

	if (!dropnpcsParsed.success) {
		console.log(dropnpcsParsed.error);
		throw error(404);
	}

	return {
		item: parsedRow.data,
		dropnpcs: dropnpcsParsed.data
	};
}
