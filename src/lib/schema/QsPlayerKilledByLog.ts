import {z} from 'zod';
export const QsPlayerKilledByLogSchema= z.object({
char_id: z.coerce.number(),
damage: z.coerce.number(),
killed_by: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spell: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsPlayerKilledByLogType = z.infer<typeof QsPlayerKilledByLogSchema>;
