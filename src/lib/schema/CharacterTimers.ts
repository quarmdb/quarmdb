import {z} from 'zod';
export const CharacterTimersSchema= z.object({
duration: z.number(),
enable: z.number(),
id: z.number(),
start: z.number(),
type: z.number(),
});
export type CharacterTimersType = z.infer<typeof CharacterTimersSchema>;
