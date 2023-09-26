import {z} from 'zod';
export const CharacterTimersSchema= z.object({
duration: z.coerce.number(),
enable: z.coerce.number(),
id: z.coerce.number(),
start: z.coerce.number(),
type: z.coerce.number(),
});
export type CharacterTimersType = z.infer<typeof CharacterTimersSchema>;
