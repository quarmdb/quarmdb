import {z} from 'zod';
export const NameFilterSchema= z.object({
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type NameFilterType = z.infer<typeof NameFilterSchema>;
