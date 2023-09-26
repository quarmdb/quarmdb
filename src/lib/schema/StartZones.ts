import {z} from 'zod';
export const StartZonesSchema= z.object({
bind_id: z.coerce.number(),
bind_x: z.coerce.number(),
bind_y: z.coerce.number(),
bind_z: z.coerce.number(),
heading: z.coerce.number(),
player_choice: z.coerce.number(),
player_class: z.coerce.number(),
player_deity: z.coerce.number(),
player_race: z.coerce.number(),
select_rank: z.coerce.number(),
start_zone: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type StartZonesType = z.infer<typeof StartZonesSchema>;
