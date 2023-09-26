import {z} from 'zod';
export const AltadvVarsSchema= z.object({
aa_expansion: z.coerce.number(),
account_time_required: z.coerce.number(),
class_type: z.coerce.number(),
classes: z.coerce.number(),
cost: z.coerce.number(),
cost_inc: z.coerce.number(),
eqmacid: z.coerce.number(),
level_inc: z.coerce.number(),
max_level: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
prereq_minpoints: z.coerce.number(),
prereq_skill: z.coerce.number(),
skill_id: z.coerce.number(),
special_category: z.coerce.number(),
spell_refresh: z.coerce.number(),
spell_type: z.coerce.number(),
spellid: z.coerce.number(),
type: z.coerce.number(),
});
export type AltadvVarsType = z.infer<typeof AltadvVarsSchema>;
