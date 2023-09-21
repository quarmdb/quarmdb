import {z} from 'zod';
export const CharacterBuffsSchema= z.object({
ExtraDIChance: z.number(),
bard_modifier: z.number(),
caster_level: z.number(),
caster_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
counters: z.number(),
id: z.number(),
magic_rune: z.number(),
melee_rune: z.number(),
persistent: z.number(),
slot_id: z.number(),
spell_id: z.number(),
ticsremaining: z.number(),
});
export type CharacterBuffsType = z.infer<typeof CharacterBuffsSchema>;
