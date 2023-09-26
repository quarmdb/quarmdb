import {z} from 'zod';
export const CharacterBindSchema= z.object({
heading: z.coerce.number(),
id: z.coerce.number(),
is_home: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type CharacterBindType = z.infer<typeof CharacterBindSchema>;
