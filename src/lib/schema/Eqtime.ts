import {z} from 'zod';
export const EqtimeSchema= z.object({
day: z.coerce.number(),
hour: z.coerce.number(),
minute: z.coerce.number(),
month: z.coerce.number(),
realtime: z.coerce.number(),
year: z.coerce.number(),
});
export type EqtimeType = z.infer<typeof EqtimeSchema>;
