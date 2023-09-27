import {z} from 'zod';
export const NpcTypesMetadataSchema= z.object({
iscreatedmob: z.number(),
iscustomfeaturenpc: z.number(),
isnamedmob: z.number(),
ispkmob: z.number(),
israidtarget: z.number(),
npc_types_id: z.number(),
});
export type NpcTypesMetadataType = z.infer<typeof NpcTypesMetadataSchema>;
