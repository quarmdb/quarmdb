import {z} from 'zod';
export const CharacterSoulmarksSchema= z.object({
acctname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charid: z.coerce.number(),
charname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
desc: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmacctname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
type: z.coerce.number(),
utime: z.coerce.number(),
});
export type CharacterSoulmarksType = z.infer<typeof CharacterSoulmarksSchema>;
