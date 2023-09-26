import {z} from 'zod';
export const GroundSpawnsSchema= z.object({
comment: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
heading: z.coerce.number(),
id: z.coerce.number(),
item: z.coerce.number(),
max_allowed: z.coerce.number(),
max_expansion: z.coerce.number(),
max_x: z.coerce.number(),
max_y: z.coerce.number(),
max_z: z.coerce.number(),
min_expansion: z.coerce.number(),
min_x: z.coerce.number(),
min_y: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
respawn_timer: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type GroundSpawnsType = z.infer<typeof GroundSpawnsSchema>;
