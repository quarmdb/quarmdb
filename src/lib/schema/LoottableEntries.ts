import {z} from 'zod';
export const LoottableEntriesSchema= z.object({
droplimit: z.number(),
lootdrop_id: z.number(),
loottable_id: z.number(),
mindrop: z.number(),
multiplier: z.number(),
multiplier_min: z.number(),
probability: z.number(),
});
export type LoottableEntriesType = z.infer<typeof LoottableEntriesSchema>;
