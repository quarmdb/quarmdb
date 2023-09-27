import {z} from 'zod';
export const CharacterCorpseItemsSchema= z.object({
aug_1: z.number(),
aug_2: z.number(),
aug_3: z.number(),
aug_4: z.number(),
aug_5: z.number(),
charges: z.number(),
corpse_id: z.number(),
equip_slot: z.number(),
item_id: z.number(),
serialnumber: z.number(),
});
export type CharacterCorpseItemsType = z.infer<typeof CharacterCorpseItemsSchema>;
