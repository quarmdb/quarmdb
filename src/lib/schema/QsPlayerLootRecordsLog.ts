import {z} from 'zod';
export const QsPlayerLootRecordsLogSchema= z.object({
char_id: z.number(),
charges: z.number(),
copper: z.number(),
corpse_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gold: z.number(),
item_id: z.number(),
item_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
platinum: z.number(),
silver: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsPlayerLootRecordsLogType = z.infer<typeof QsPlayerLootRecordsLogSchema>;
