import {z} from 'zod';
export const QsPlayerAaRateHourlySchema= z.object({
aa_count: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.number(),
hour_time: z.number(),
});
export type QsPlayerAaRateHourlyType = z.infer<typeof QsPlayerAaRateHourlySchema>;
