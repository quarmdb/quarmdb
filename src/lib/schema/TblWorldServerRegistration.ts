import {z} from 'zod';
export const TblWorldServerRegistrationSchema= z.object({
note: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serveradminid: z.number(),
serverid: z.number(),
serverlastipaddr: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serverlastlogindate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serverlisttypeid: z.number(),
serverlongname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
servershortname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
servertagdescription: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
servertrusted: z.number(),
});
export type TblWorldServerRegistrationType = z.infer<typeof TblWorldServerRegistrationSchema>;
