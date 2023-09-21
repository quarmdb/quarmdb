import {z} from 'zod';
export const GridEntriesSchema= z.object({
centerpoint: z.number(),
gridid: z.number(),
heading: z.number(),
number: z.number(),
pause: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zoneid: z.number(),
});
export type GridEntriesType = z.infer<typeof GridEntriesSchema>;
