import {z} from 'zod';
export const TblLoginServerAccountsSchema= z.object({
AccountCreateDate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountEmail: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountPassword: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastIPAddress: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastLoginDate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LoginServerID: z.number(),
});
export type TblLoginServerAccountsType = z.infer<typeof TblLoginServerAccountsSchema>;
