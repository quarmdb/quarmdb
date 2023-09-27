import {z} from 'zod';
export const RuleValuesSchema= z.object({
notes: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rule_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rule_value: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ruleset_id: z.number(),
});
export type RuleValuesType = z.infer<typeof RuleValuesSchema>;
