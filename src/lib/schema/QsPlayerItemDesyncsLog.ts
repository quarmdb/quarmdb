import {z} from 'zod';
export const QsPlayerItemDesyncsLogSchema= z.object({
char_id: z.coerce.number(),
error: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsPlayerItemDesyncsLogType = z.infer<typeof QsPlayerItemDesyncsLogSchema>;
