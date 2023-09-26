import {z} from 'zod';
export const QsPlayerTsEventLogSchema= z.object({
chance: z.coerce.number(),
char_id: z.coerce.number(),
recipe_id: z.coerce.number(),
results: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
tradeskill: z.coerce.number(),
trivial: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type QsPlayerTsEventLogType = z.infer<typeof QsPlayerTsEventLogSchema>;
