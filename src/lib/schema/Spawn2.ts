import {z} from 'zod';
export const Spawn2Schema= z.object({
_condition: z.number(),
animation: z.number(),
boot_respawntime: z.number(),
boot_variance: z.number(),
clear_timer_onboot: z.number(),
cond_value: z.number(),
enabled: z.number(),
force_z: z.number(),
heading: z.number(),
id: z.number(),
max_expansion: z.number(),
min_expansion: z.number(),
pathgrid: z.number(),
raid_target_spawnpoint: z.number(),
respawntime: z.number(),
spawngroupID: z.number(),
variance: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type Spawn2Type = z.infer<typeof Spawn2Schema>;
