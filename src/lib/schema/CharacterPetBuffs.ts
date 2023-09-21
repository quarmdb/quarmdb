import {z} from 'zod';
export const CharacterPetBuffsSchema= z.object({
caster_level: z.number(),
castername: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.number(),
counters: z.number(),
numhits: z.number(),
pet: z.number(),
rune: z.number(),
slot: z.number(),
spell_id: z.number(),
ticsremaining: z.number(),
});
export type CharacterPetBuffsType = z.infer<typeof CharacterPetBuffsSchema>;
