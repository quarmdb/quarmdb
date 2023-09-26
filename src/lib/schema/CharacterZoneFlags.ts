import {z} from 'zod';
export const CharacterZoneFlagsSchema= z.object({
id: z.coerce.number(),
key_: z.coerce.number(),
zoneID: z.coerce.number(),
});
export type CharacterZoneFlagsType = z.infer<typeof CharacterZoneFlagsSchema>;
