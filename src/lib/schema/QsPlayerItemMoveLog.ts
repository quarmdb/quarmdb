import {z} from 'zod';
export const QsPlayerItemMoveLogSchema= z.object({
char_id: z.coerce.number(),
char_items: z.coerce.number(),
charges: z.coerce.number(),
from_slot: z.coerce.number(),
item_id: z.coerce.number(),
postaction: z.coerce.number(),
stack_size: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_slot: z.coerce.number(),
});
export type QsPlayerItemMoveLogType = z.infer<typeof QsPlayerItemMoveLogSchema>;
