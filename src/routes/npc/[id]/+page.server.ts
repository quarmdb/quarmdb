import { error } from '@sveltejs/kit';
import { db } from '../../../lib/conn';
import type { PageServerLoadEvent } from './$types';

export async function load({ params }:PageServerLoadEvent) {
  let id = parseInt(params.id);
  if(typeof id !== "number") throw error(404);

  const npc = db.prepare(`
			SELECT 
				npc_types.*, 
				races.name as racename
			FROM 
				npc_types 
			INNER JOIN races ON 
				races.id = npc_types.race 
			WHERE npc_types.id = ?
		`).get(id);

	if (!npc) throw error(404);

	const spawn = db.prepare(`
		SELECT
			sp2.zone, sp2.x, sp2.y, sp2.z
		FROM 
			spawn2 sp2
		INNER JOIN spawnentry ON
			spawnentry.spawngroupID = sp2.spawngroupID
		WHERE
			spawnentry.npcID = ?
	`).all(id);


	return {
		npc,
		spawn
	};
}
