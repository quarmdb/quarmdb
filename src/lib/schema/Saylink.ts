import {z} from 'zod';
export const SaylinkSchema= z.object({
id: z.coerce.number(),
phrase: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SaylinkType = z.infer<typeof SaylinkSchema>;
