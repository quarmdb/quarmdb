import {z} from 'zod';
export const HackersSchema= z.object({
account: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
date: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
hacked: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type HackersType = z.infer<typeof HackersSchema>;
