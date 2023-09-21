import {z} from 'zod';
export const CharacterSpellsSchema= z.object({
id: z.number(),
slot_id: z.number(),
spell_id: z.number(),
});
export type CharacterSpellsType = z.infer<typeof CharacterSpellsSchema>;
