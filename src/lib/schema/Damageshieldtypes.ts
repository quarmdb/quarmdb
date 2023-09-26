import {z} from 'zod';
export const DamageshieldtypesSchema= z.object({
spellid: z.coerce.number(),
type: z.coerce.number(),
});
export type DamageshieldtypesType = z.infer<typeof DamageshieldtypesSchema>;
