import {z} from 'zod';
export const FriendsSchema= z.object({
charid: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.number(),
});
export type FriendsType = z.infer<typeof FriendsSchema>;
