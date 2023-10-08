import { NpcTypesSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { number, z } from 'zod';

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
		console.error(parsedNpcs.error);
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

export const getNpc = async (id: number, client: PoolClient) => {
	const npcRes = await client.query({
		text: `
    SELECT 
      npc_types.*, 
      races.name as racename
    FROM 
      npc_types 
    INNER JOIN races ON 
      races.id = npc_types.race 
    WHERE npc_types.id = $1
  `,
		values: [id]
	});

	if (npcRes.rowCount === 0) {
		console.error(`npcRes rowcount === 0`);
		throw error(404);
	}
	const npcParse = NpcTypesSchema.extend({ racename: z.coerce.string() }).safeParse(npcRes.rows[0]);

	if (!npcParse.success) {
		console.error(npcParse.error.errors);
		throw error(404);
	}
	return npcParse.data;
};
