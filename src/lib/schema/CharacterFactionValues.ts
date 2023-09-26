import {z} from 'zod';
export const CharacterFactionValuesSchema= z.object({
current_value: z.coerce.number(),
faction_id: z.coerce.number(),
id: z.coerce.number(),
temp: z.coerce.number(),
});
export type CharacterFactionValuesType = z.infer<typeof CharacterFactionValuesSchema>;
