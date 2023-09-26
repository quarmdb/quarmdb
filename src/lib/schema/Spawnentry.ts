import {z} from 'zod';
export const SpawnentrySchema= z.object({
chance: z.coerce.number(),
max_expansion: z.coerce.number(),
maxtime: z.coerce.number(),
min_expansion: z.coerce.number(),
mintime: z.coerce.number(),
npcID: z.coerce.number(),
spawngroupID: z.coerce.number(),
});
export type SpawnentryType = z.infer<typeof SpawnentrySchema>;
