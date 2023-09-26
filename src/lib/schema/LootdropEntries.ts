import {z} from 'zod';
export const LootdropEntriesSchema= z.object({
chance: z.coerce.number(),
disabled_chance: z.coerce.number(),
equip_item: z.coerce.number(),
item_charges: z.coerce.number(),
item_id: z.coerce.number(),
lootdrop_id: z.coerce.number(),
max_expansion: z.coerce.number(),
maxlevel: z.coerce.number(),
min_expansion: z.coerce.number(),
min_looter_level: z.coerce.number(),
minlevel: z.coerce.number(),
multiplier: z.coerce.number(),
});
export type LootdropEntriesType = z.infer<typeof LootdropEntriesSchema>;
