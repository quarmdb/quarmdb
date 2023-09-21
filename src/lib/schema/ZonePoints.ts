import {z} from 'zod';
export const ZonePointsSchema= z.object({
client_version_mask: z.number(),
heading: z.number(),
id: z.number(),
number: z.number(),
target_heading: z.number(),
target_x: z.number(),
target_y: z.number(),
target_z: z.number(),
target_zone_id: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZonePointsType = z.infer<typeof ZonePointsSchema>;
