import {z} from 'zod';
export const AccountIpSchema= z.object({
accid: z.coerce.number(),
count: z.coerce.number(),
ip: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lastused: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type AccountIpType = z.infer<typeof AccountIpSchema>;
