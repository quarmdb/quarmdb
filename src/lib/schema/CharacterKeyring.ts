import {z} from 'zod';
export const CharacterKeyringSchema= z.object({
id: z.coerce.number(),
item_id: z.coerce.number(),
});
export type CharacterKeyringType = z.infer<typeof CharacterKeyringSchema>;
