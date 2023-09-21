import {z} from 'zod';
export const CharacterBindSchema= z.object({
heading: z.number(),
id: z.number(),
is_home: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone_id: z.number(),
});
export type CharacterBindType = z.infer<typeof CharacterBindSchema>;
