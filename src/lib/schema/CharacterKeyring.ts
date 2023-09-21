import {z} from 'zod';
export const CharacterKeyringSchema= z.object({
id: z.number(),
item_id: z.number(),
});
export type CharacterKeyringType = z.infer<typeof CharacterKeyringSchema>;
