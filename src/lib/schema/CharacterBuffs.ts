import {z} from 'zod';
export const CharacterBuffsSchema= z.object({
ExtraDIChance: z.coerce.number(),
bard_modifier: z.coerce.number(),
caster_level: z.coerce.number(),
caster_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
counters: z.coerce.number(),
id: z.coerce.number(),
magic_rune: z.coerce.number(),
melee_rune: z.coerce.number(),
persistent: z.coerce.number(),
slot_id: z.coerce.number(),
spell_id: z.coerce.number(),
ticsremaining: z.coerce.number(),
});
export type CharacterBuffsType = z.infer<typeof CharacterBuffsSchema>;
