import {z} from 'zod';
export const DamageshieldtypesSchema= z.object({
spellid: z.number(),
type: z.number(),
});
export type DamageshieldtypesType = z.infer<typeof DamageshieldtypesSchema>;
