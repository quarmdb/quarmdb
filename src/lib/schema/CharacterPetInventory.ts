import {z} from 'zod';
export const CharacterPetInventorySchema= z.object({
char_id: z.coerce.number(),
item_id: z.coerce.number(),
pet: z.coerce.number(),
slot: z.coerce.number(),
});
export type CharacterPetInventoryType = z.infer<typeof CharacterPetInventorySchema>;
