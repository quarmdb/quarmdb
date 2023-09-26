import {z} from 'zod';
export const NpcTypesMetadataSchema= z.object({
isCreatedMob: z.coerce.number(),
isCustomFeatureNPC: z.coerce.number(),
isNamedMob: z.coerce.number(),
isPKMob: z.coerce.number(),
isRaidTarget: z.coerce.number(),
npc_types_id: z.coerce.number(),
});
export type NpcTypesMetadataType = z.infer<typeof NpcTypesMetadataSchema>;
