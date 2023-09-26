import {z} from 'zod';
export const CharacterMemmedSpellsSchema= z.object({
id: z.coerce.number(),
slot_id: z.coerce.number(),
spell_id: z.coerce.number(),
});
export type CharacterMemmedSpellsType = z.infer<typeof CharacterMemmedSpellsSchema>;
