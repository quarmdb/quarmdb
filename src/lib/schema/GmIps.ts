import {z} from 'zod';
export const GmIpsSchema= z.object({
account_id: z.number(),
ip_address: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GmIpsType = z.infer<typeof GmIpsSchema>;
