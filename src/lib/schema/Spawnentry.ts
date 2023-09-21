import {z} from 'zod';
export const SpawnentrySchema= z.object({
chance: z.number(),
max_expansion: z.number(),
maxtime: z.number(),
min_expansion: z.number(),
mintime: z.number(),
npcID: z.number(),
spawngroupID: z.number(),
});
export type SpawnentryType = z.infer<typeof SpawnentrySchema>;
