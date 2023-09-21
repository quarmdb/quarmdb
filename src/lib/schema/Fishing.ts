import {z} from 'zod';
export const FishingSchema= z.object({
Itemid: z.number(),
chance: z.number(),
id: z.number(),
skill_level: z.number(),
zoneid: z.number(),
});
export type FishingType = z.infer<typeof FishingSchema>;
