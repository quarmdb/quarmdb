import {z} from 'zod';
export const ForageSchema= z.object({
itemid: z.number(),
chance: z.number(),
id: z.number(),
level: z.number(),
zoneid: z.number(),
});
export type ForageType = z.infer<typeof ForageSchema>;
