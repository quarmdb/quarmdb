import {z} from 'zod';
export const Spawn2Schema= z.object({
_condition: z.coerce.number(),
animation: z.coerce.number(),
boot_respawntime: z.coerce.number(),
boot_variance: z.coerce.number(),
clear_timer_onboot: z.coerce.number(),
cond_value: z.coerce.number(),
enabled: z.coerce.number(),
force_z: z.coerce.number(),
heading: z.coerce.number(),
id: z.coerce.number(),
max_expansion: z.coerce.number(),
min_expansion: z.coerce.number(),
pathgrid: z.coerce.number(),
raid_target_spawnpoint: z.coerce.number(),
respawntime: z.coerce.number(),
spawngroupID: z.coerce.number(),
variance: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type Spawn2Type = z.infer<typeof Spawn2Schema>;
