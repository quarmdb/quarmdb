import {z} from 'zod';
export const SkillCapsSchema= z.object({
cap: z.number(),
class: z.number(),
class_: z.number(),
level: z.number(),
skillID: z.number(),
});
export type SkillCapsType = z.infer<typeof SkillCapsSchema>;
