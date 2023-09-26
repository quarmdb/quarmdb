import {z} from 'zod';
export const TradeskillRecipeSchema= z.object({
enabled: z.coerce.number(),
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
nofail: z.coerce.number(),
notes: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
quest: z.coerce.number(),
replace_container: z.coerce.number(),
skillneeded: z.coerce.number(),
tradeskill: z.coerce.number(),
trivial: z.coerce.number(),
});
export type TradeskillRecipeType = z.infer<typeof TradeskillRecipeSchema>;
