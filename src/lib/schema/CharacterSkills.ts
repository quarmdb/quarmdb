import {z} from 'zod';
export const CharacterSkillsSchema= z.object({
id: z.number(),
skill_id: z.number(),
value: z.number(),
});
export type CharacterSkillsType = z.infer<typeof CharacterSkillsSchema>;
