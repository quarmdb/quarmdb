import {z} from 'zod';
export const QsPlayerNpcKillLogSchema= z.object({
aggro_charid: z.coerce.number(),
char_id: z.coerce.number(),
npc_id: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type QsPlayerNpcKillLogType = z.infer<typeof QsPlayerNpcKillLogSchema>;
