import {z} from 'zod';
export const QsPlayerGroundSpawnsLogSchema= z.object({
bagged: z.coerce.number(),
characterid: z.coerce.number(),
itemid: z.coerce.number(),
quantity: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone: z.coerce.number(),
});
export type QsPlayerGroundSpawnsLogType = z.infer<typeof QsPlayerGroundSpawnsLogSchema>;
