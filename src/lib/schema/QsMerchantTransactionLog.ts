import {z} from 'zod';
export const QsMerchantTransactionLogSchema= z.object({
char_cp: z.number(),
char_gp: z.number(),
char_id: z.number(),
char_items: z.number(),
char_pp: z.number(),
char_slot: z.number(),
char_sp: z.number(),
charges: z.number(),
item_id: z.number(),
merchant_cp: z.number(),
merchant_gp: z.number(),
merchant_id: z.number(),
merchant_items: z.number(),
merchant_pp: z.number(),
merchant_sp: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.number(),
});
export type QsMerchantTransactionLogType = z.infer<typeof QsMerchantTransactionLogSchema>;
