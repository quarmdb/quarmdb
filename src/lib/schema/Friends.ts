import {z} from 'zod';
export const FriendsSchema= z.object({
charid: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.number(),
});
export type FriendsType = z.infer<typeof FriendsSchema>;
