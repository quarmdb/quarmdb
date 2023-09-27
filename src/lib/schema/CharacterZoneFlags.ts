import {z} from 'zod';
export const CharacterZoneFlagsSchema= z.object({
id: z.number(),
key_: z.number(),
zoneid: z.number(),
});
export type CharacterZoneFlagsType = z.infer<typeof CharacterZoneFlagsSchema>;
