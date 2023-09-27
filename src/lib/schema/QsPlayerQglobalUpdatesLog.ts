import {z} from 'zod';
export const QsPlayerQglobalUpdatesLogSchema= z.object({
action: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.number(),
newvalue: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
varname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsPlayerQglobalUpdatesLogType = z.infer<typeof QsPlayerQglobalUpdatesLogSchema>;
