import {z} from 'zod';
export const ProximitiesSchema= z.object({
exploreid: z.number(),
maxx: z.number(),
maxy: z.number(),
maxz: z.number(),
minx: z.number(),
miny: z.number(),
minz: z.number(),
zoneid: z.number(),
});
export type ProximitiesType = z.infer<typeof ProximitiesSchema>;
