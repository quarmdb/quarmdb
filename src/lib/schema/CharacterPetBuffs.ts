import {z} from 'zod';
export const CharacterPetBuffsSchema= z.object({
caster_level: z.coerce.number(),
castername: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.coerce.number(),
counters: z.coerce.number(),
numhits: z.coerce.number(),
pet: z.coerce.number(),
rune: z.coerce.number(),
slot: z.coerce.number(),
spell_id: z.coerce.number(),
ticsremaining: z.coerce.number(),
});
export type CharacterPetBuffsType = z.infer<typeof CharacterPetBuffsSchema>;
