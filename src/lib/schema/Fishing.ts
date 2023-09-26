import {z} from 'zod';
export const FishingSchema= z.object({
Itemid: z.coerce.number(),
chance: z.coerce.number(),
id: z.coerce.number(),
skill_level: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type FishingType = z.infer<typeof FishingSchema>;
