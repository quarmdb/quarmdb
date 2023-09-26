import {z} from 'zod';
export const QsPlayerQglobalUpdatesLogSchema= z.object({
action: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.coerce.number(),
newvalue: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
varname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsPlayerQglobalUpdatesLogType = z.infer<typeof QsPlayerQglobalUpdatesLogSchema>;
