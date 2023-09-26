import {z} from 'zod';
export const QsPlayerAaRateHourlySchema= z.object({
aa_count: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.coerce.number(),
hour_time: z.coerce.number(),
});
export type QsPlayerAaRateHourlyType = z.infer<typeof QsPlayerAaRateHourlySchema>;
