import {z} from 'zod';
export const QsPlayerHandinLogSchema= z.object({
char_cp: z.coerce.number(),
char_gp: z.coerce.number(),
char_id: z.coerce.number(),
char_items: z.coerce.number(),
char_pp: z.coerce.number(),
char_sp: z.coerce.number(),
npc_id: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerHandinLogType = z.infer<typeof QsPlayerHandinLogSchema>;
