import {z} from 'zod';
export const CharacterLegacyItemsSchema= z.object({
character_id: z.coerce.number(),
item_id: z.coerce.number(),
});
export type CharacterLegacyItemsType = z.infer<typeof CharacterLegacyItemsSchema>;
