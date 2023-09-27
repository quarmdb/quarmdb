import {z} from 'zod';
export const GridSchema= z.object({
id: z.number(),
type: z.number(),
type2: z.number(),
zoneid: z.number(),
});
export type GridType = z.infer<typeof GridSchema>;
