import {z} from 'zod';
export const SkillCapsSchema= z.object({
cap: z.coerce.number(),
class: z.coerce.number(),
class_: z.coerce.number(),
level: z.coerce.number(),
skillID: z.coerce.number(),
});
export type SkillCapsType = z.infer<typeof SkillCapsSchema>;
