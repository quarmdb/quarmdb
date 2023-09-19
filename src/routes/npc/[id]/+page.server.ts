import { error } from '@sveltejs/kit';
import { db } from '../../../lib/conn';
import type { PageServerLoadEvent } from './$types';
import { NPCSchema } from '$lib/schema';

export async function load({ params }:PageServerLoadEvent) {
  let id = parseInt(params.id);
  if(typeof id !== "number") throw error(404);

  const row = db.prepare(`
			SELECT 
				npc_types.*, 
				races.name as racename
			FROM 
				npc_types 
			INNER JOIN races ON 
				races.id = npc_types.race 
			WHERE npc_types.id = ?
		`).get(id);

	if (!row) throw error(404);

	return {
		npc:row
	};
}
