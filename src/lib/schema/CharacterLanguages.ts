import {z} from 'zod';
export const CharacterLanguagesSchema= z.object({
id: z.coerce.number(),
lang_id: z.coerce.number(),
value: z.coerce.number(),
});
export type CharacterLanguagesType = z.infer<typeof CharacterLanguagesSchema>;
