import {z} from 'zod';
export const NpcSpellsEffectsSchema= z.object({
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
parent_list: z.number(),
});
export type NpcSpellsEffectsType = z.infer<typeof NpcSpellsEffectsSchema>;
