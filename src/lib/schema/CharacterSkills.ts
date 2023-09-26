import {z} from 'zod';
export const CharacterSkillsSchema= z.object({
id: z.coerce.number(),
skill_id: z.coerce.number(),
value: z.coerce.number(),
});
export type CharacterSkillsType = z.infer<typeof CharacterSkillsSchema>;
