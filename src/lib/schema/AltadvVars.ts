import {z} from 'zod';
export const AltadvVarsSchema= z.object({
aa_expansion: z.number(),
account_time_required: z.number(),
class_type: z.number(),
classes: z.number(),
cost: z.number(),
cost_inc: z.number(),
eqmacid: z.number(),
level_inc: z.number(),
max_level: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
prereq_minpoints: z.number(),
prereq_skill: z.number(),
skill_id: z.number(),
special_category: z.number(),
spell_refresh: z.number(),
spell_type: z.number(),
spellid: z.number(),
type: z.number(),
});
export type AltadvVarsType = z.infer<typeof AltadvVarsSchema>;
