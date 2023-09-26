import {z} from 'zod';
export const ZonePointsSchema= z.object({
client_version_mask: z.coerce.number(),
heading: z.coerce.number(),
id: z.coerce.number(),
number: z.coerce.number(),
target_heading: z.coerce.number(),
target_x: z.coerce.number(),
target_y: z.coerce.number(),
target_z: z.coerce.number(),
target_zone_id: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZonePointsType = z.infer<typeof ZonePointsSchema>;
