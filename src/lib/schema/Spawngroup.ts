import {z} from 'zod';
export const SpawngroupSchema= z.object({
delay: z.number(),
despawn: z.number(),
despawn_timer: z.number(),
id: z.number(),
max_x: z.number(),
max_y: z.number(),
min_x: z.number(),
min_y: z.number(),
mindelay: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rand_condition_: z.number(),
rand_respawntime: z.number(),
rand_spawns: z.number(),
rand_variance: z.number(),
spawn_limit: z.number(),
wp_spawns: z.number(),
});
export type SpawngroupType = z.infer<typeof SpawngroupSchema>;
