import {z} from 'zod';
export const PlayerTitlesetsSchema= z.object({
char_id: z.number(),
id: z.number(),
title_set: z.number(),
});
export type PlayerTitlesetsType = z.infer<typeof PlayerTitlesetsSchema>;
