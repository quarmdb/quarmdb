import {z} from 'zod';
export const CharacterPetInfoSchema= z.object({
char_id: z.coerce.number(),
hp: z.coerce.number(),
mana: z.coerce.number(),
pet: z.coerce.number(),
petname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
petpower: z.coerce.number(),
size: z.coerce.number(),
spell_id: z.coerce.number(),
});
export type CharacterPetInfoType = z.infer<typeof CharacterPetInfoSchema>;
