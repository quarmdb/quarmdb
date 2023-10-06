import { RuleValuesSchema } from '$lib/schema';
import { error } from 'console';
import type { PoolClient } from 'pg';
import { z } from 'zod';

export const getAllRules = async (client: PoolClient) => {
	const result = await client.query(`
	SELECT 
		rv.rule_name, 
		rv.rule_value, 
		rv.notes,
		rs.ruleset_id,
		JSON_AGG(JSON_BUILD_OBJECT(
			'short_name', z.short_name, 
			'reducedspawntimer', z.reducedspawntimers
		)) as zones
	FROM rule_values rv
	INNER JOIN rule_sets rs
		ON rs.ruleset_id = rv.ruleset_id
	INNER JOIN zone z
		ON z.ruleset = rs.ruleset_id
	GROUP BY rv.rule_name, 	rv.rule_value, 	rv.notes,	rs.ruleset_id
	ORDER BY rv.rule_name
	`);
	const parsed = RuleValuesSchema.extend({
		zones: z
			.object({
				short_name: z.string(),
				reducedspawntimer: z.number()
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
