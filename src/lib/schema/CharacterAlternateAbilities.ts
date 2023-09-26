import {z} from 'zod';
export const CharacterAlternateAbilitiesSchema= z.object({
aa_id: z.coerce.number(),
aa_value: z.coerce.number(),
id: z.coerce.number(),
slot: z.coerce.number(),
});
export type CharacterAlternateAbilitiesType = z.infer<typeof CharacterAlternateAbilitiesSchema>;
