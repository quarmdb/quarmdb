import {z} from 'zod';
export const LootdropEntriesSchema= z.object({
chance: z.number(),
disabled_chance: z.number(),
equip_item: z.number(),
item_charges: z.number(),
item_id: z.number(),
lootdrop_id: z.number(),
max_expansion: z.number(),
maxlevel: z.number(),
min_expansion: z.number(),
min_looter_level: z.number(),
minlevel: z.number(),
multiplier: z.number(),
});
export type LootdropEntriesType = z.infer<typeof LootdropEntriesSchema>;
