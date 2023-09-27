import {z} from 'zod';
export const QsPlayerItemDeleteLogSchema= z.object({
char_id: z.number(),
char_items: z.number(),
char_slot: z.number(),
charges: z.number(),
item_id: z.number(),
stack_size: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerItemDeleteLogType = z.infer<typeof QsPlayerItemDeleteLogSchema>;
