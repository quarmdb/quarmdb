import { ItemsSchema, NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';

export async function load({ params }: PageServerLoadEvent) {
	let id = parseInt(params.id);
	if (typeof id !== 'number') throw error(404);

	console.log(`Retreiving Item Id ${id}`);

	const client = await pool.connect();

	let result = await client.query(
		`
		SELECT
			*
		FROM
			items
		WHERE
			items.id = ${id}
		`
	);
	const itemParse = ItemsSchema.safeParse(result.rows[0]);

	if (!itemParse.success) {
		console.error(itemParse.error);
		client.release();
		throw error(404);
	}

	const dropnpcs = await client.query(
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
			ld_e.item_id = ${id}
		`
	);

	const dropnpcsParsed = NpcTypesSchema.pick({ name: true, id: true })
		.array()
		.safeParse(dropnpcs.rows);

	if (!dropnpcsParsed.success) {
		console.log(dropnpcsParsed.error);
		client.release();
		throw error(404);
	}

	client.release();

	return {
		item: itemParse.data,
		dropnpcs: dropnpcsParsed.data
	};
}
