import {z} from 'zod';
export const TitlesSchema= z.object({
char_id: z.number(),
class: z.number(),
gender: z.number(),
id: z.number(),
item_id: z.number(),
max_aa_points: z.number(),
max_skill_value: z.number(),
min_aa_points: z.number(),
min_skill_value: z.number(),
prefix: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
skill_id: z.number(),
status: z.number(),
suffix: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
title_set: z.number(),
});
export type TitlesType = z.infer<typeof TitlesSchema>;
