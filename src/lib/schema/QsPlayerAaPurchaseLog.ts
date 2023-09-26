import {z} from 'zod';
export const QsPlayerAaPurchaseLogSchema= z.object({
aa_cost: z.coerce.number(),
aa_id: z.coerce.number(),
aa_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
aa_type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_id: z.coerce.number(),
instance_id: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsPlayerAaPurchaseLogType = z.infer<typeof QsPlayerAaPurchaseLogSchema>;
