import {z} from 'zod';
export const QsPlayerItemDeleteLogSchema= z.object({
char_id: z.coerce.number(),
char_items: z.coerce.number(),
char_slot: z.coerce.number(),
charges: z.coerce.number(),
item_id: z.coerce.number(),
stack_size: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerItemDeleteLogType = z.infer<typeof QsPlayerItemDeleteLogSchema>;
