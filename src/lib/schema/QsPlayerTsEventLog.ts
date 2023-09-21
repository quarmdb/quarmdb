import {z} from 'zod';
export const QsPlayerTsEventLogSchema= z.object({
chance: z.number(),
char_id: z.number(),
recipe_id: z.number(),
results: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
tradeskill: z.number(),
trivial: z.number(),
zone_id: z.number(),
});
export type QsPlayerTsEventLogType = z.infer<typeof QsPlayerTsEventLogSchema>;
