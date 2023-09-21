import {z} from 'zod';
export const StartingItemsSchema= z.object({
class: z.number(),
deityid: z.number(),
gm: z.number(),
id: z.number(),
item_charges: z.number(),
itemid: z.number(),
race: z.number(),
slot: z.number(),
zoneid: z.number(),
});
export type StartingItemsType = z.infer<typeof StartingItemsSchema>;
