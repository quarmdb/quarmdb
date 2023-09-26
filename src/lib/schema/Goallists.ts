import {z} from 'zod';
export const GoallistsSchema= z.object({
entry: z.coerce.number(),
listid: z.coerce.number(),
});
export type GoallistsType = z.infer<typeof GoallistsSchema>;
