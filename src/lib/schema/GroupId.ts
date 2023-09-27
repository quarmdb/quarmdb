import {z} from 'zod';
export const GroupIdSchema= z.object({
accountid: z.number(),
charid: z.number(),
groupid: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GroupIdType = z.infer<typeof GroupIdSchema>;
