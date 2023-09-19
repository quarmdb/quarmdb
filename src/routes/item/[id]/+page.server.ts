import { error } from '@sveltejs/kit';
import { db } from '../../../lib/conn';
import type { PageServerLoadEvent } from './$types';



export async function load({ params }:PageServerLoadEvent) {
  let id = parseInt(params.id);
  if(typeof id !== "number") throw error(404);

  const row = db.prepare('SELECT * FROM items WHERE id = ?').get(id);

	if (!row) throw error(404);

	const dropped = db.prepare(`
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
		`).all(id);

	return {
		item: row,
		dropped
	};
}
