import {z} from 'zod';
export const ChatchannelsSchema= z.object({
minstatus: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
owner: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
password: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ChatchannelsType = z.infer<typeof ChatchannelsSchema>;
