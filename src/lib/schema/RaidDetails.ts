import {z} from 'zod';
export const RaidDetailsSchema= z.object({
locked: z.number(),
loottype: z.number(),
raidid: z.number(),
});
export type RaidDetailsType = z.infer<typeof RaidDetailsSchema>;
