import {z} from 'zod';
export const ForageSchema= z.object({
Itemid: z.coerce.number(),
chance: z.coerce.number(),
id: z.coerce.number(),
level: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type ForageType = z.infer<typeof ForageSchema>;
