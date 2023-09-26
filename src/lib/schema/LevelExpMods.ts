import {z} from 'zod';
export const LevelExpModsSchema= z.object({
aa_exp_mod: z.coerce.number(),
exp_mod: z.coerce.number(),
level: z.coerce.number(),
});
export type LevelExpModsType = z.infer<typeof LevelExpModsSchema>;
