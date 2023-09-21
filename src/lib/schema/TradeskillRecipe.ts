import {z} from 'zod';
export const TradeskillRecipeSchema= z.object({
enabled: z.number(),
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
nofail: z.number(),
notes: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
quest: z.number(),
replace_container: z.number(),
skillneeded: z.number(),
tradeskill: z.number(),
trivial: z.number(),
});
export type TradeskillRecipeType = z.infer<typeof TradeskillRecipeSchema>;
