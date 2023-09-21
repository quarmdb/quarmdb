import {z} from 'zod';
export const GraveyardSchema= z.object({
heading: z.number(),
id: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone_id: z.number(),
});
export type GraveyardType = z.infer<typeof GraveyardSchema>;
