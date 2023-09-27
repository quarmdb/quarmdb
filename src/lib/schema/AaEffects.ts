import {z} from 'zod';
export const AaEffectsSchema= z.object({
aaid: z.number(),
base1: z.number(),
base2: z.number(),
effectid: z.number(),
id: z.number(),
slot: z.number(),
});
export type AaEffectsType = z.infer<typeof AaEffectsSchema>;
