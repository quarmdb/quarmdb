import {z} from 'zod';
export const NpcSpellsEffectsSchema= z.object({
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
parent_list: z.coerce.number(),
});
export type NpcSpellsEffectsType = z.infer<typeof NpcSpellsEffectsSchema>;
