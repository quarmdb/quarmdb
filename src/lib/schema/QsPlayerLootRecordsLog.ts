import {z} from 'zod';
export const QsPlayerLootRecordsLogSchema= z.object({
char_id: z.coerce.number(),
charges: z.coerce.number(),
copper: z.coerce.number(),
corpse_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gold: z.coerce.number(),
item_id: z.coerce.number(),
item_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
platinum: z.coerce.number(),
silver: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsPlayerLootRecordsLogType = z.infer<typeof QsPlayerLootRecordsLogSchema>;
