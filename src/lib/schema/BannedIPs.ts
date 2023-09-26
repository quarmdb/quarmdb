import {z} from 'zod';
export const BannedIPsSchema= z.object({
ip_address: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
notes: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type BannedIPsType = z.infer<typeof BannedIPsSchema>;
