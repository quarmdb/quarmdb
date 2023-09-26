import {z} from 'zod';
export const TblWorldServerRegistrationSchema= z.object({
Note: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerAdminID: z.coerce.number(),
ServerID: z.coerce.number(),
ServerLastIPAddr: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerLastLoginDate: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerListTypeID: z.coerce.number(),
ServerLongName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerShortName: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerTagDescription: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerTrusted: z.coerce.number(),
});
export type TblWorldServerRegistrationType = z.infer<typeof TblWorldServerRegistrationSchema>;
