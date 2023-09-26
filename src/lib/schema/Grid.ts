import {z} from 'zod';
export const GridSchema= z.object({
id: z.coerce.number(),
type: z.coerce.number(),
type2: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type GridType = z.infer<typeof GridSchema>;
