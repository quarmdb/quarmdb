import {z} from 'zod';
export const CharacterFactionValuesSchema= z.object({
current_value: z.number(),
faction_id: z.number(),
id: z.number(),
temp: z.number(),
});
export type CharacterFactionValuesType = z.infer<typeof CharacterFactionValuesSchema>;
