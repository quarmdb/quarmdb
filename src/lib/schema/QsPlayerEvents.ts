import {z} from 'zod';
export const QsPlayerEventsSchema= z.object({
char_id: z.coerce.number(),
event: z.coerce.number(),
event_desc: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
time: z.coerce.number(),
});
export type QsPlayerEventsType = z.infer<typeof QsPlayerEventsSchema>;
