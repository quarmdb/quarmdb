import {z} from 'zod';
export const QsPlayerTradeItemsLogSchema= z.object({
bagged: z.number(),
charges: z.number(),
from_id: z.number(),
from_slot: z.number(),
item_id: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_id: z.number(),
to_slot: z.number(),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerTradeItemsLogType = z.infer<typeof QsPlayerTradeItemsLogSchema>;
