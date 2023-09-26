import {z} from 'zod';
export const ProximitiesSchema= z.object({
exploreid: z.coerce.number(),
maxx: z.coerce.number(),
maxy: z.coerce.number(),
maxz: z.coerce.number(),
minx: z.coerce.number(),
miny: z.coerce.number(),
minz: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type ProximitiesType = z.infer<typeof ProximitiesSchema>;
