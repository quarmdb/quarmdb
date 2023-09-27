import {z} from 'zod';
export const ReportsSchema= z.object({
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
reported: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
reported_text: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ReportsType = z.infer<typeof ReportsSchema>;
