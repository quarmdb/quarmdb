import {z} from 'zod';
export const RuleSetsSchema= z.object({
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ruleset_id: z.number(),
});
export type RuleSetsType = z.infer<typeof RuleSetsSchema>;
