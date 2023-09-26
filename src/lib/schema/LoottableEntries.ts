import {z} from 'zod';
export const LoottableEntriesSchema= z.object({
droplimit: z.coerce.number(),
lootdrop_id: z.coerce.number(),
loottable_id: z.coerce.number(),
mindrop: z.coerce.number(),
multiplier: z.coerce.number(),
multiplier_min: z.coerce.number(),
probability: z.coerce.number(),
});
export type LoottableEntriesType = z.infer<typeof LoottableEntriesSchema>;
