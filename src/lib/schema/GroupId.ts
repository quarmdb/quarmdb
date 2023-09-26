import {z} from 'zod';
export const GroupIdSchema= z.object({
accountid: z.coerce.number(),
charid: z.coerce.number(),
groupid: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GroupIdType = z.infer<typeof GroupIdSchema>;
