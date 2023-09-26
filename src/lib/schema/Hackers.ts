import {z} from 'zod';
export const HackersSchema= z.object({
account: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
date: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
hacked: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type HackersType = z.infer<typeof HackersSchema>;
