import {z} from 'zod';
export const TblWorldServerRegistrationSchema= z.object({
Note: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerAdminID: z.number(),
ServerID: z.number(),
ServerLastIPAddr: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerLastLoginDate: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerListTypeID: z.number(),
ServerLongName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerShortName: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerTagDescription: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerTrusted: z.number(),
});
export type TblWorldServerRegistrationType = z.infer<typeof TblWorldServerRegistrationSchema>;
