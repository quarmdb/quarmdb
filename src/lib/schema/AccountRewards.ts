import {z} from 'zod';
export const AccountRewardsSchema= z.object({
account_id: z.coerce.number(),
amount: z.coerce.number(),
reward_id: z.coerce.number(),
});
export type AccountRewardsType = z.infer<typeof AccountRewardsSchema>;
