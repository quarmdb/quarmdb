import {z} from 'zod';
export const GridEntriesSchema= z.object({
centerpoint: z.coerce.number(),
gridid: z.coerce.number(),
heading: z.coerce.number(),
number: z.coerce.number(),
pause: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type GridEntriesType = z.infer<typeof GridEntriesSchema>;
