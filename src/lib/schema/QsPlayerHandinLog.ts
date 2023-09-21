import {z} from 'zod';
export const QsPlayerHandinLogSchema= z.object({
char_cp: z.number(),
char_gp: z.number(),
char_id: z.number(),
char_items: z.number(),
char_pp: z.number(),
char_sp: z.number(),
npc_id: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerHandinLogType = z.infer<typeof QsPlayerHandinLogSchema>;
