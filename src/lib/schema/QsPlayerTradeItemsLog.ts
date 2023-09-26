import {z} from 'zod';
export const QsPlayerTradeItemsLogSchema= z.object({
bagged: z.coerce.number(),
charges: z.coerce.number(),
from_id: z.coerce.number(),
from_slot: z.coerce.number(),
item_id: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_id: z.coerce.number(),
to_slot: z.coerce.number(),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerTradeItemsLogType = z.infer<typeof QsPlayerTradeItemsLogSchema>;
