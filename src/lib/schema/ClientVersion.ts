import {z} from 'zod';
export const ClientVersionSchema= z.object({
account_id: z.number(),
version_: z.number(),
});
export type ClientVersionType = z.infer<typeof ClientVersionSchema>;
