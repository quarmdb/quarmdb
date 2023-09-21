import {z} from 'zod';
export const TraderSchema= z.object({
char_id: z.number(),
charges: z.number(),
i_slotid: z.number(),
item_cost: z.number(),
item_id: z.number(),
slot_id: z.number(),
});
export type TraderType = z.infer<typeof TraderSchema>;
