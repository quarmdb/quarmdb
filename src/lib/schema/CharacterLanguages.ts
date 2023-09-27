import {z} from 'zod';
export const CharacterLanguagesSchema= z.object({
id: z.number(),
lang_id: z.number(),
value: z.number(),
});
export type CharacterLanguagesType = z.infer<typeof CharacterLanguagesSchema>;
