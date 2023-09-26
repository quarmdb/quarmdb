import {z} from 'zod';
export const NpcFactionEntriesSchema= z.object({
faction_id: z.coerce.number(),
npc_faction_id: z.coerce.number(),
npc_value: z.coerce.number(),
sort_order: z.coerce.number(),
temp: z.coerce.number(),
value: z.coerce.number(),
});
export type NpcFactionEntriesType = z.infer<typeof NpcFactionEntriesSchema>;
