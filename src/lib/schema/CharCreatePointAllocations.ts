import {z} from 'zod';
export const CharCreatePointAllocationsSchema= z.object({
alloc_agi: z.coerce.number(),
alloc_cha: z.coerce.number(),
alloc_dex: z.coerce.number(),
alloc_int: z.coerce.number(),
alloc_sta: z.coerce.number(),
alloc_str: z.coerce.number(),
alloc_wis: z.coerce.number(),
base_agi: z.coerce.number(),
base_cha: z.coerce.number(),
base_dex: z.coerce.number(),
base_int: z.coerce.number(),
base_sta: z.coerce.number(),
base_str: z.coerce.number(),
base_wis: z.coerce.number(),
id: z.coerce.number(),
});
export type CharCreatePointAllocationsType = z.infer<typeof CharCreatePointAllocationsSchema>;
