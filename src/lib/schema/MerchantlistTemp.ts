import {z} from 'zod';
export const MerchantlistTempSchema= z.object({
charges: z.coerce.number(),
itemid: z.coerce.number(),
npcid: z.coerce.number(),
quantity: z.coerce.number(),
slot: z.coerce.number(),
});
export type MerchantlistTempType = z.infer<typeof MerchantlistTempSchema>;
