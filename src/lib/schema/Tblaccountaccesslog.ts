import {z} from 'zod';
export const TblaccountaccesslogSchema= z.object({
IP: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
SQL_Time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accessed: z.coerce.number(),
account_id: z.coerce.number(),
account_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
reason: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type TblaccountaccesslogType = z.infer<typeof TblaccountaccesslogSchema>;
