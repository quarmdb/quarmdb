import {z} from 'zod';
export const PlayerTitlesetsSchema= z.object({
char_id: z.coerce.number(),
id: z.coerce.number(),
title_set: z.coerce.number(),
});
export type PlayerTitlesetsType = z.infer<typeof PlayerTitlesetsSchema>;
