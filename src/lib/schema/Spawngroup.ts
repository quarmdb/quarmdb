import {z} from 'zod';
export const SpawngroupSchema= z.object({
delay: z.coerce.number(),
despawn: z.coerce.number(),
despawn_timer: z.coerce.number(),
id: z.coerce.number(),
max_x: z.coerce.number(),
max_y: z.coerce.number(),
min_x: z.coerce.number(),
min_y: z.coerce.number(),
mindelay: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rand_condition_: z.coerce.number(),
rand_respawntime: z.coerce.number(),
rand_spawns: z.coerce.number(),
rand_variance: z.coerce.number(),
spawn_limit: z.coerce.number(),
wp_spawns: z.coerce.number(),
});
export type SpawngroupType = z.infer<typeof SpawngroupSchema>;
