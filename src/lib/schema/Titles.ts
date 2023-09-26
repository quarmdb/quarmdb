import {z} from 'zod';
export const TitlesSchema= z.object({
char_id: z.coerce.number(),
class: z.coerce.number(),
gender: z.coerce.number(),
id: z.coerce.number(),
item_id: z.coerce.number(),
max_aa_points: z.coerce.number(),
max_skill_value: z.coerce.number(),
min_aa_points: z.coerce.number(),
min_skill_value: z.coerce.number(),
prefix: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
skill_id: z.coerce.number(),
status: z.coerce.number(),
suffix: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
title_set: z.coerce.number(),
});
export type TitlesType = z.infer<typeof TitlesSchema>;
