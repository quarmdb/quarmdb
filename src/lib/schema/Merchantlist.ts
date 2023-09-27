import {z} from 'zod';
export const MerchantlistSchema= z.object({
alt_currency_cost: z.number(),
classes_required: z.number(),
faction_required: z.number(),
item: z.number(),
level_required: z.number(),
max_expansion: z.number(),
merchantid: z.number(),
min_expansion: z.number(),
probability: z.number(),
quantity: z.number(),
slot: z.number(),
});
export type MerchantlistType = z.infer<typeof MerchantlistSchema>;
