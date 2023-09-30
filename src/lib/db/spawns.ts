import { Spawn2Schema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { z } from 'zod';

export const getSpawnsByZone = async (short_name: string, client: PoolClient) => {
	const spawnRes = await client.query(
		`
    SELECT
      spawn.*,
      JSON_AGG(JSON_BUILD_OBJECT(
        'npcid', npc.id,
        'name', npc.name,
        'chance', se.chance
      )) as "spawns"
    FROM 
      spawn2 spawn
    INNER JOIN spawnentry se
      ON se.spawngroupID = spawn.spawngroupID
    INNER JOIN npc_types npc
      ON npc.id = se.npcID
    WHERE
      spawn.zone = $1
    GROUP BY
      spawn.id
  `,
		[short_name]
	);

	if (spawnRes.rowCount === 0) {
		console.error(`spawnRes.rowCount === 0`);
	}

	const SpawnsByZoneSchema = Spawn2Schema.extend({
		spawns: z
			.object({
				npcid: z.number(),
				name: z.string(),
				chance: z.number()
			})
			.array()
	});

	const spawnsParsed = SpawnsByZoneSchema.array().safeParse(spawnRes.rows);

	if (!spawnsParsed.success) {
		console.error(spawnsParsed.error);
		throw error(404);
	}

	return spawnsParsed.data;
};
