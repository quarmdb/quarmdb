import {z} from 'zod';
export const QsPlayerNpcKillLogSchema= z.object({
aggro_charid: z.number(),
char_id: z.number(),
npc_id: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.number(),
zone_id: z.number(),
});
export type QsPlayerNpcKillLogType = z.infer<typeof QsPlayerNpcKillLogSchema>;
