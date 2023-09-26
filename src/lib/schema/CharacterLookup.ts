import {z} from 'zod';
export const CharacterLookupSchema= z.object({
account_id: z.coerce.number(),
class: z.coerce.number(),
firstlogon: z.coerce.number(),
groupid: z.coerce.number(),
id: z.coerce.number(),
inspectmessage: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
instanceid: z.coerce.number(),
level: z.coerce.number(),
lfg: z.coerce.number(),
lfp: z.coerce.number(),
mailkey: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
pktime: z.coerce.number(),
timelaston: z.coerce.number(),
x: z.coerce.number(),
xtargets: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zoneid: z.coerce.number(),
zonename: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CharacterLookupType = z.infer<typeof CharacterLookupSchema>;
