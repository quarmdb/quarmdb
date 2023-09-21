import {z} from 'zod';
export const NpcTypesMetadataSchema= z.object({
isCreatedMob: z.number(),
isCustomFeatureNPC: z.number(),
isNamedMob: z.number(),
isPKMob: z.number(),
isRaidTarget: z.number(),
npc_types_id: z.number(),
});
export type NpcTypesMetadataType = z.infer<typeof NpcTypesMetadataSchema>;
