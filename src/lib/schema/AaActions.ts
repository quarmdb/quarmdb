import {z} from 'zod';
export const AaActionsSchema= z.object({
aaid: z.number(),
nonspell_action: z.number(),
nonspell_duration: z.number(),
nonspell_mana: z.number(),
rank: z.number(),
redux_aa: z.number(),
redux_aa2: z.number(),
redux_rate: z.number(),
redux_rate2: z.number(),
reuse_time: z.number(),
spell_id: z.number(),
target: z.number(),
});
export type AaActionsType = z.infer<typeof AaActionsSchema>;
