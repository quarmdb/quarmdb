import {z} from 'zod';
export const TblServerAdminRegistrationSchema= z.object({
AccountName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountPassword: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
Email: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
FirstName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
RegistrationDate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
RegistrationIPAddr: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerAdminID: z.number(),
});
export type TblServerAdminRegistrationType = z.infer<typeof TblServerAdminRegistrationSchema>;
