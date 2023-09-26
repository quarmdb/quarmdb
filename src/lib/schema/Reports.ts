import {z} from 'zod';
export const ReportsSchema= z.object({
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
reported: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
reported_text: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ReportsType = z.infer<typeof ReportsSchema>;
