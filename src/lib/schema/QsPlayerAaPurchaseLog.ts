import {z} from 'zod';
export const QsPlayerAaPurchaseLogSchema= z.object({
aa_cost: z.number(),
aa_id: z.number(),
aa_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
aa_type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.number(),
instance_id: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsPlayerAaPurchaseLogType = z.infer<typeof QsPlayerAaPurchaseLogSchema>;
