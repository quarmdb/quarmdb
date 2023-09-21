import {z} from 'zod';
export const RespawnTimesSchema= z.object({
duration: z.number(),
id: z.number(),
start: z.number(),
});
export type RespawnTimesType = z.infer<typeof RespawnTimesSchema>;
