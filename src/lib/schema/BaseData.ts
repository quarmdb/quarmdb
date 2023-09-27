import {z} from 'zod';
export const BaseDataSchema= z.object({
class: z.number(),
end: z.number(),
end_fac: z.number(),
hp: z.number(),
hp_fac: z.number(),
level: z.number(),
mana: z.number(),
mana_fac: z.number(),
unk1: z.number(),
unk2: z.number(),
});
export type BaseDataType = z.infer<typeof BaseDataSchema>;
