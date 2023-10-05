import { NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { z } from 'zod';

export const searchNpcs = async (whereString: string, client: PoolClient) => {
	let query = `
  SELECT zone, JSON_AGG(JSON_BUILD_OBJECT('id',id,'name',name)) as npcs FROM
  (SELECT DISTINCT
    s2.zone,
    npc.id,
    npc.name
  FROM
    npc_types npc
  INNER JOIN spawnentry se
    ON se.npcID = npc.id
  INNER JOIN spawn2 s2
    ON s2.spawngroupId = se.spawngroupID
  ${whereString}
  )
  GROUP BY zone
  ORDER BY zone
  `;

	console.log(query);

	const res = await client.query(query, []);

	const parsedNpcs = NpcTypesSearchSchema.array().safeParse(res.rows);
	if (!parsedNpcs.success) {
		//console.error(parsedNpcs.error);
		throw error(404);
	}
	return parsedNpcs.data;
};

export const NpcTypesSearchSchema = z.object({
	zone: z.string(),
	npcs: z
		.object({
			id: z.number(),
			name: z.string()
		})
		.array()
});
export type NpcTypesSearchType = z.infer<typeof NpcTypesSearchSchema>;
