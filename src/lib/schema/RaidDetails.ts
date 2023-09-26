import {z} from 'zod';
export const RaidDetailsSchema= z.object({
locked: z.coerce.number(),
loottype: z.coerce.number(),
raidid: z.coerce.number(),
});
export type RaidDetailsType = z.infer<typeof RaidDetailsSchema>;
