import {z} from 'zod';
export const MerchantlistTempSchema= z.object({
charges: z.number(),
itemid: z.number(),
npcid: z.number(),
quantity: z.number(),
slot: z.number(),
});
export type MerchantlistTempType = z.infer<typeof MerchantlistTempSchema>;
