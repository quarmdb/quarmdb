import {z} from 'zod';
export const MerchantlistSchema= z.object({
alt_currency_cost: z.coerce.number(),
classes_required: z.coerce.number(),
faction_required: z.coerce.number(),
item: z.coerce.number(),
level_required: z.coerce.number(),
max_expansion: z.coerce.number(),
merchantid: z.coerce.number(),
min_expansion: z.coerce.number(),
probability: z.coerce.number(),
quantity: z.coerce.number(),
slot: z.coerce.number(),
});
export type MerchantlistType = z.infer<typeof MerchantlistSchema>;
