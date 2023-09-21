import {z} from 'zod';
export const CharacterMemmedSpellsSchema= z.object({
id: z.number(),
slot_id: z.number(),
spell_id: z.number(),
});
export type CharacterMemmedSpellsType = z.infer<typeof CharacterMemmedSpellsSchema>;
