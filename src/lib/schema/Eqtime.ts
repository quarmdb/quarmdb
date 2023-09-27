import {z} from 'zod';
export const EqtimeSchema= z.object({
day: z.number(),
hour: z.number(),
minute: z.number(),
month: z.number(),
realtime: z.number(),
year: z.number(),
});
export type EqtimeType = z.infer<typeof EqtimeSchema>;
