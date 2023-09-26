import {z} from 'zod';
export const SkillDifficultySchema= z.object({
difficulty: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
skillid: z.coerce.number(),
});
export type SkillDifficultyType = z.infer<typeof SkillDifficultySchema>;
