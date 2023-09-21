import {z} from 'zod';
export const QsPlayerGroundSpawnsLogSchema= z.object({
bagged: z.number(),
characterid: z.number(),
itemid: z.number(),
quantity: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone: z.number(),
});
export type QsPlayerGroundSpawnsLogType = z.infer<typeof QsPlayerGroundSpawnsLogSchema>;
