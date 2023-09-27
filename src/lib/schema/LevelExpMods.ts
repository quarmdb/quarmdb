import {z} from 'zod';
export const LevelExpModsSchema= z.object({
aa_exp_mod: z.number(),
exp_mod: z.number(),
level: z.number(),
});
export type LevelExpModsType = z.infer<typeof LevelExpModsSchema>;
