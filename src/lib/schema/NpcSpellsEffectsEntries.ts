import {z} from 'zod';
export const NpcSpellsEffectsEntriesSchema= z.object({
id: z.coerce.number(),
maxlevel: z.coerce.number(),
minlevel: z.coerce.number(),
npc_spells_effects_id: z.coerce.number(),
se_base: z.coerce.number(),
se_limit: z.coerce.number(),
se_max: z.coerce.number(),
spell_effect_id: z.coerce.number(),
});
export type NpcSpellsEffectsEntriesType = z.infer<typeof NpcSpellsEffectsEntriesSchema>;
