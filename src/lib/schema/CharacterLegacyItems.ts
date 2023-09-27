import {z} from 'zod';
export const CharacterLegacyItemsSchema= z.object({
character_id: z.number(),
item_id: z.number(),
});
export type CharacterLegacyItemsType = z.infer<typeof CharacterLegacyItemsSchema>;
