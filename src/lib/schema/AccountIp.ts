import {z} from 'zod';
export const AccountIpSchema= z.object({
accid: z.number(),
count: z.number(),
ip: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lastused: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type AccountIpType = z.infer<typeof AccountIpSchema>;
