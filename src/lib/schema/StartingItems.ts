import {z} from 'zod';
export const StartingItemsSchema= z.object({
class: z.coerce.number(),
deityid: z.coerce.number(),
gm: z.coerce.number(),
id: z.coerce.number(),
item_charges: z.coerce.number(),
itemid: z.coerce.number(),
race: z.coerce.number(),
slot: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type StartingItemsType = z.infer<typeof StartingItemsSchema>;
