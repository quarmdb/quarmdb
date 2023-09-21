import {z} from 'zod';
export const CharCreatePointAllocationsSchema= z.object({
alloc_agi: z.number(),
alloc_cha: z.number(),
alloc_dex: z.number(),
alloc_int: z.number(),
alloc_sta: z.number(),
alloc_str: z.number(),
alloc_wis: z.number(),
base_agi: z.number(),
base_cha: z.number(),
base_dex: z.number(),
base_int: z.number(),
base_sta: z.number(),
base_str: z.number(),
base_wis: z.number(),
id: z.number(),
});
export type CharCreatePointAllocationsType = z.infer<typeof CharCreatePointAllocationsSchema>;
