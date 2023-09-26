import {z} from 'zod';
export const VariablesSchema= z.object({
information: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ts: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
value: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
varname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type VariablesType = z.infer<typeof VariablesSchema>;
