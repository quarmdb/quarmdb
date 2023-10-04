import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { z } from 'zod';
import { getIdForClass } from './constants/eqclasses';
import { SpellsNewSchema } from '$lib/schema';
import { getItemIdByType } from './constants/item';

export const getAllSpellsByClass = async (className: string, pool: PoolClient) => {
	const playerClassId = getIdForClass(className);
	if (playerClassId === 0) {
		console.error(className + ' is not a player class');
		throw error(404);
	}

	const spellsRes = await pool.query(
		`SELECT * FROM spells_new where classes${playerClassId} < 255`
	);

	if (spellsRes.rowCount === 0) {
		console.error(`spellsRes.rowCount === 0`);
	}

	const spellsParsed = SpellsNewSchema.array().safeParse(spellsRes.rows);

	if (!spellsParsed.success) {
		console.error(spellsParsed.error);
		throw error(404);
	}

	return spellsParsed.data;
};

export const getAllSpellsByClassByLevel = async (className: string, client: PoolClient) => {
	const playerClassId = getIdForClass(className);
	if (playerClassId === 0) {
		console.error(className + ' is not a player class');
		throw error(404);
	}

	const q = `
	SELECT 
		s.classes${playerClassId} as level,
		JSON_AGG(JSON_BUILD_OBJECT(
			'item_id', i.id,
			'item_name', i.name,
			'spell_id',s.id,
			'spell_name',s.name
		) ORDER BY s.name) spells
	FROM
    items i
	INNER JOIN spells_new s
    ON s.id = i.scrolleffect
	WHERE
    i.itemType = ${getItemIdByType('Spells')} AND s.classes${playerClassId} < 255
	GROUP BY s.classes${playerClassId}

`;

	//console.log(q);

	const spellsRes = await client.query(q);

	const SpellsByLevelSchema = z.object({
		level: z.number(),
		spells: z
			.object({
				item_id: z.number(),
				item_name: z.string(),
				spell_id: z.number(),
				spell_name: z.string()
			})
			.array()
	});

	const spellsParsed = SpellsByLevelSchema.array().safeParse(spellsRes.rows);

	if (!spellsParsed.success) {
		console.error(spellsParsed.error);
		throw error(404);
	}

	return spellsParsed.data;
};
