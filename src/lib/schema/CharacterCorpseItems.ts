import {z} from 'zod';
export const CharacterCorpseItemsSchema= z.object({
aug_1: z.coerce.number(),
aug_2: z.coerce.number(),
aug_3: z.coerce.number(),
aug_4: z.coerce.number(),
aug_5: z.coerce.number(),
charges: z.coerce.number(),
corpse_id: z.coerce.number(),
equip_slot: z.coerce.number(),
item_id: z.coerce.number(),
serialnumber: z.coerce.number(),
});
export type CharacterCorpseItemsType = z.infer<typeof CharacterCorpseItemsSchema>;
