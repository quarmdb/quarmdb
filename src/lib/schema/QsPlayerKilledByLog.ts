import {z} from 'zod';
export const QsPlayerKilledByLogSchema= z.object({
char_id: z.number(),
damage: z.number(),
killed_by: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spell: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsPlayerKilledByLogType = z.infer<typeof QsPlayerKilledByLogSchema>;
