import {z} from 'zod';
export const GoallistsSchema= z.object({
entry: z.number(),
listid: z.number(),
});
export type GoallistsType = z.infer<typeof GoallistsSchema>;
