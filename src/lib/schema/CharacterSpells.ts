import {z} from 'zod';
export const CharacterSpellsSchema= z.object({
id: z.coerce.number(),
slot_id: z.coerce.number(),
spell_id: z.coerce.number(),
});
export type CharacterSpellsType = z.infer<typeof CharacterSpellsSchema>;
