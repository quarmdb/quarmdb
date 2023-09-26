import {z} from 'zod';
export const RespawnTimesSchema= z.object({
duration: z.coerce.number(),
id: z.coerce.number(),
start: z.coerce.number(),
});
export type RespawnTimesType = z.infer<typeof RespawnTimesSchema>;
