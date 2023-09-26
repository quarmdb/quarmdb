import {z} from 'zod';
export const GraveyardSchema= z.object({
heading: z.coerce.number(),
id: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type GraveyardType = z.infer<typeof GraveyardSchema>;
