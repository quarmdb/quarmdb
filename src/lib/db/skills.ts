import { ItemsSchema, TradeskillRecipeSchema } from '$lib/schema';
import { error } from '@sveltejs/kit';
import type { PoolClient } from 'pg';
import { z } from 'zod';

export const getRecipes = async (skillId: number, client: PoolClient) => {
	const result = await client.query(
		`
    SELECT
      recipe.id, recipe.name, recipe.trivial,
      JSON_AGG(JSON_BUILD_OBJECT(
        'item_id', i.id,
        'item_name', i.name, 
				'successcount', entry.successcount,
				'failcount', entry.failcount,
				'iscontainer', entry.iscontainer,
        'componentcount', entry.componentcount)) AS ingredients
    FROM
      tradeskill_recipe recipe
    INNER JOIN tradeskill_recipe_entries entry
      ON entry.recipe_id = recipe.id
    INNER JOIN items i
      ON i.id = entry.item_id
    WHERE
      tradeskill = $1
    GROUP BY recipe.id, recipe.trivial
    ORDER BY trivial ASC
    
    `,
		[skillId]
	);

	if (result.rowCount === 0) {
		console.error(`getRecipes(${skillId}) => result.rowCount === 0`);
		throw error(404);
	}

	const parsed = z
		.object({
			id: z.number(),
			trivial: z.number(),
			name: z.string(),
			ingredients: z
				.object({
					item_id: z.number(),
					item_name: z.string(),
					failcount: z.number(),
					successcount: z.number(),
					iscontainer: z.number(),
					componentcount: z.number()
				})
				.array()
		})
		.array()
		.safeParse(result.rows);
	if (!parsed.success) {
		console.error(parsed.error);
		throw error(404);
	}

	return parsed.data;
};
