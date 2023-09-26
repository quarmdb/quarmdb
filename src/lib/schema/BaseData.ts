import {z} from 'zod';
export const BaseDataSchema= z.object({
class: z.coerce.number(),
end: z.coerce.number(),
end_fac: z.coerce.number(),
hp: z.coerce.number(),
hp_fac: z.coerce.number(),
level: z.coerce.number(),
mana: z.coerce.number(),
mana_fac: z.coerce.number(),
unk1: z.coerce.number(),
unk2: z.coerce.number(),
});
export type BaseDataType = z.infer<typeof BaseDataSchema>;
