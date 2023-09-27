import {z} from 'zod';
export const QsPlayerItemMoveLogSchema= z.object({
char_id: z.number(),
char_items: z.number(),
charges: z.number(),
from_slot: z.number(),
item_id: z.number(),
postaction: z.number(),
stack_size: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_slot: z.number(),
});
export type QsPlayerItemMoveLogType = z.infer<typeof QsPlayerItemMoveLogSchema>;
