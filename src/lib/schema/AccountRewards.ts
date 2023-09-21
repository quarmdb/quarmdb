import {z} from 'zod';
export const AccountRewardsSchema= z.object({
account_id: z.number(),
amount: z.number(),
reward_id: z.number(),
});
export type AccountRewardsType = z.infer<typeof AccountRewardsSchema>;
