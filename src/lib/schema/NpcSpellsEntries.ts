import {z} from 'zod';
export const NpcSpellsEntriesSchema= z.object({
id: z.number(),
manacost: z.number(),
maxlevel: z.number(),
minlevel: z.number(),
npc_spells_id: z.number(),
priority: z.number(),
recast_delay: z.number(),
resist_adjust: z.number(),
spellid: z.number(),
type: z.number(),
});
export type NpcSpellsEntriesType = z.infer<typeof NpcSpellsEntriesSchema>;
