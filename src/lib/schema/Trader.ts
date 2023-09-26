import {z} from 'zod';
export const TraderSchema= z.object({
char_id: z.coerce.number(),
charges: z.coerce.number(),
i_slotid: z.coerce.number(),
item_cost: z.coerce.number(),
item_id: z.coerce.number(),
slot_id: z.coerce.number(),
});
export type TraderType = z.infer<typeof TraderSchema>;
