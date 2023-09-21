import {z} from 'zod';
export const StartZonesSchema= z.object({
bind_id: z.number(),
bind_x: z.number(),
bind_y: z.number(),
bind_z: z.number(),
heading: z.number(),
player_choice: z.number(),
player_class: z.number(),
player_deity: z.number(),
player_race: z.number(),
select_rank: z.number(),
start_zone: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone_id: z.number(),
});
export type StartZonesType = z.infer<typeof StartZonesSchema>;
