import {z} from 'zod';
export const ClientVersionSchema= z.object({
account_id: z.coerce.number(),
version_: z.coerce.number(),
});
export type ClientVersionType = z.infer<typeof ClientVersionSchema>;
