import {z} from 'zod';
export const TblServerAdminRegistrationSchema= z.object({
AccountName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
AccountPassword: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
Email: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
FirstName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
LastName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
RegistrationDate: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
RegistrationIPAddr: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerAdminID: z.coerce.number(),
});
export type TblServerAdminRegistrationType = z.infer<typeof TblServerAdminRegistrationSchema>;
