import {z} from 'zod';
export const RuleSetsSchema= z.object({
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ruleset_id: z.coerce.number(),
});
export type RuleSetsType = z.infer<typeof RuleSetsSchema>;
