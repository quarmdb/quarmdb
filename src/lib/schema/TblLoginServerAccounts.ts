import {z} from 'zod';
export const TblLoginServerAccountsSchema= z.object({
accountcreatedate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accountemail: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accountname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accountpassword: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lastipaddress: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lastlogindate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
loginserverid: z.number(),
});
export type TblLoginServerAccountsType = z.infer<typeof TblLoginServerAccountsSchema>;
