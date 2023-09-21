import {z} from 'zod';
export const VariablesSchema= z.object({
information: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ts: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
value: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
varname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type VariablesType = z.infer<typeof VariablesSchema>;
