import {z} from 'zod';
export const QsPlayerTradeLogSchema= z.object({
char1_cp: z.coerce.number(),
char1_gp: z.coerce.number(),
char1_id: z.coerce.number(),
char1_items: z.coerce.number(),
char1_pp: z.coerce.number(),
char1_sp: z.coerce.number(),
char2_cp: z.coerce.number(),
char2_gp: z.coerce.number(),
char2_id: z.coerce.number(),
char2_items: z.coerce.number(),
char2_pp: z.coerce.number(),
char2_sp: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerTradeLogType = z.infer<typeof QsPlayerTradeLogSchema>;
