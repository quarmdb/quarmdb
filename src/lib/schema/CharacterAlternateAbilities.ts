import {z} from 'zod';
export const CharacterAlternateAbilitiesSchema= z.object({
aa_id: z.number(),
aa_value: z.number(),
id: z.number(),
slot: z.number(),
});
export type CharacterAlternateAbilitiesType = z.infer<typeof CharacterAlternateAbilitiesSchema>;
