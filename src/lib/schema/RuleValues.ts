import {z} from 'zod';
export const RuleValuesSchema= z.object({
notes: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rule_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rule_value: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ruleset_id: z.coerce.number(),
});
export type RuleValuesType = z.infer<typeof RuleValuesSchema>;
