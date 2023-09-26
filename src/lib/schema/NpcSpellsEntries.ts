import {z} from 'zod';
export const NpcSpellsEntriesSchema= z.object({
id: z.coerce.number(),
manacost: z.coerce.number(),
maxlevel: z.coerce.number(),
minlevel: z.coerce.number(),
npc_spells_id: z.coerce.number(),
priority: z.coerce.number(),
recast_delay: z.coerce.number(),
resist_adjust: z.coerce.number(),
spellid: z.coerce.number(),
type: z.coerce.number(),
});
export type NpcSpellsEntriesType = z.infer<typeof NpcSpellsEntriesSchema>;
