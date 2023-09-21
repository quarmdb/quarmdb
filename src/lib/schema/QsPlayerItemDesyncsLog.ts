import {z} from 'zod';
export const QsPlayerItemDesyncsLogSchema= z.object({
char_id: z.number(),
error: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsPlayerItemDesyncsLogType = z.infer<typeof QsPlayerItemDesyncsLogSchema>;
