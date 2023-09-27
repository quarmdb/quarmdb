import {z} from 'zod';
export const CharacterPetInfoSchema= z.object({
char_id: z.number(),
hp: z.number(),
mana: z.number(),
pet: z.number(),
petname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
petpower: z.number(),
size: z.number(),
spell_id: z.number(),
});
export type CharacterPetInfoType = z.infer<typeof CharacterPetInfoSchema>;
