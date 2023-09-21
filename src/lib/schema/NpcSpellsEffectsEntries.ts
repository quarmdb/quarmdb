import {z} from 'zod';
export const NpcSpellsEffectsEntriesSchema= z.object({
id: z.number(),
maxlevel: z.number(),
minlevel: z.number(),
npc_spells_effects_id: z.number(),
se_base: z.number(),
se_limit: z.number(),
se_max: z.number(),
spell_effect_id: z.number(),
});
export type NpcSpellsEffectsEntriesType = z.infer<typeof NpcSpellsEffectsEntriesSchema>;
