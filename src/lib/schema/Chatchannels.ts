import {z} from 'zod';
export const ChatchannelsSchema= z.object({
minstatus: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
owner: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
password: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ChatchannelsType = z.infer<typeof ChatchannelsSchema>;
