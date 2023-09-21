import {z} from 'zod';
export const CharacterLookupSchema= z.object({
account_id: z.number(),
class: z.number(),
firstlogon: z.number(),
groupid: z.number(),
id: z.number(),
inspectmessage: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
instanceid: z.number(),
level: z.number(),
lfg: z.number(),
lfp: z.number(),
mailkey: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
pktime: z.number(),
timelaston: z.number(),
x: z.number(),
xtargets: z.number(),
y: z.number(),
z: z.number(),
zoneid: z.number(),
zonename: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CharacterLookupType = z.infer<typeof CharacterLookupSchema>;
