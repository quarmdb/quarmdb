import {z} from 'zod';
export const SpawnEventsSchema= z.object({
action: z.coerce.number(),
argument: z.coerce.number(),
cond_id: z.coerce.number(),
enabled: z.coerce.number(),
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
next_day: z.coerce.number(),
next_hour: z.coerce.number(),
next_minute: z.coerce.number(),
next_month: z.coerce.number(),
next_year: z.coerce.number(),
period: z.coerce.number(),
strict: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnEventsType = z.infer<typeof SpawnEventsSchema>;
