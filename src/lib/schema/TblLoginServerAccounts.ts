import {z} from 'zod';
export const TblLoginServerAccountsSchema= z.object({
AccountCreateDate: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountEmail: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountPassword: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastIPAddress: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastLoginDate: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LoginServerID: z.coerce.number(),
});
export type TblLoginServerAccountsType = z.infer<typeof TblLoginServerAccountsSchema>;
