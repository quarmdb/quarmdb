import {z} from 'zod';
export const AaActionsSchema= z.object({
aaid: z.coerce.number(),
nonspell_action: z.coerce.number(),
nonspell_duration: z.coerce.number(),
nonspell_mana: z.coerce.number(),
rank: z.coerce.number(),
redux_aa: z.coerce.number(),
redux_aa2: z.coerce.number(),
redux_rate: z.coerce.number(),
redux_rate2: z.coerce.number(),
reuse_time: z.coerce.number(),
spell_id: z.coerce.number(),
target: z.coerce.number(),
});
export type AaActionsType = z.infer<typeof AaActionsSchema>;
