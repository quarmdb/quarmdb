import {z} from 'zod';
export const GroundSpawnsSchema= z.object({
comment: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
heading: z.number(),
id: z.number(),
item: z.number(),
max_allowed: z.number(),
max_expansion: z.number(),
max_x: z.number(),
max_y: z.number(),
max_z: z.number(),
min_expansion: z.number(),
min_x: z.number(),
min_y: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
respawn_timer: z.number(),
zoneid: z.number(),
});
export type GroundSpawnsType = z.infer<typeof GroundSpawnsSchema>;
