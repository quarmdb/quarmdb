import {z} from 'zod';
export const CharacterPetInventorySchema= z.object({
char_id: z.number(),
item_id: z.number(),
pet: z.number(),
slot: z.number(),
});
export type CharacterPetInventoryType = z.infer<typeof CharacterPetInventorySchema>;
