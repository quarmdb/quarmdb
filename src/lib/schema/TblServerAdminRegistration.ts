import {z} from 'zod';
export const TblServerAdminRegistrationSchema= z.object({
accountname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accountpassword: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
email: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
firstname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
lastname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
registrationdate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
registrationipaddr: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serveradminid: z.number(),
});
export type TblServerAdminRegistrationType = z.infer<typeof TblServerAdminRegistrationSchema>;
