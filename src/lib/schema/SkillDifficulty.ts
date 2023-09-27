import {z} from 'zod';
export const SkillDifficultySchema= z.object({
difficulty: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
skillid: z.number(),
});
export type SkillDifficultyType = z.infer<typeof SkillDifficultySchema>;
