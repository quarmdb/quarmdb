import {z} from 'zod';
export const NpcFactionEntriesSchema= z.object({
faction_id: z.number(),
npc_faction_id: z.number(),
npc_value: z.number(),
sort_order: z.number(),
temp: z.number(),
value: z.number(),
});
export type NpcFactionEntriesType = z.infer<typeof NpcFactionEntriesSchema>;
