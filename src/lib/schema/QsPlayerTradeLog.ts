import {z} from 'zod';
export const QsPlayerTradeLogSchema= z.object({
char1_cp: z.number(),
char1_gp: z.number(),
char1_id: z.number(),
char1_items: z.number(),
char1_pp: z.number(),
char1_sp: z.number(),
char2_cp: z.number(),
char2_gp: z.number(),
char2_id: z.number(),
char2_items: z.number(),
char2_pp: z.number(),
char2_sp: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerTradeLogType = z.infer<typeof QsPlayerTradeLogSchema>;
