import {z} from 'zod';
export const QsMerchantTransactionLogSchema= z.object({
char_cp: z.coerce.number(),
char_gp: z.coerce.number(),
char_id: z.coerce.number(),
char_items: z.coerce.number(),
char_pp: z.coerce.number(),
char_slot: z.coerce.number(),
char_sp: z.coerce.number(),
charges: z.coerce.number(),
item_id: z.coerce.number(),
merchant_cp: z.coerce.number(),
merchant_gp: z.coerce.number(),
merchant_id: z.coerce.number(),
merchant_items: z.coerce.number(),
merchant_pp: z.coerce.number(),
merchant_sp: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone_id: z.coerce.number(),
});
export type QsMerchantTransactionLogType = z.infer<typeof QsMerchantTransactionLogSchema>;
