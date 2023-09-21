import {z} from 'zod';
export const CharacterSoulmarksSchema= z.object({
acctname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charid: z.number(),
charname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
desc: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmacctname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
type: z.number(),
utime: z.number(),
});
export type CharacterSoulmarksType = z.infer<typeof CharacterSoulmarksSchema>;
