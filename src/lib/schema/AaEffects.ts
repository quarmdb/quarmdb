import {z} from 'zod';
export const AaEffectsSchema= z.object({
aaid: z.coerce.number(),
base1: z.coerce.number(),
base2: z.coerce.number(),
effectid: z.coerce.number(),
id: z.coerce.number(),
slot: z.coerce.number(),
});
export type AaEffectsType = z.infer<typeof AaEffectsSchema>;
