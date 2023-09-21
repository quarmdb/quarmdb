import {z} from 'zod';
export const SpawnEventsSchema= z.object({
action: z.number(),
argument: z.number(),
cond_id: z.number(),
enabled: z.number(),
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
next_day: z.number(),
next_hour: z.number(),
next_minute: z.number(),
next_month: z.number(),
next_year: z.number(),
period: z.number(),
strict: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnEventsType = z.infer<typeof SpawnEventsSchema>;
