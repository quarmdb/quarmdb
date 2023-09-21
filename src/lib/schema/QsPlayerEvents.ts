import {z} from 'zod';
export const QsPlayerEventsSchema= z.object({
char_id: z.number(),
event: z.number(),
event_desc: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
time: z.number(),
});
export type QsPlayerEventsType = z.infer<typeof QsPlayerEventsSchema>;
