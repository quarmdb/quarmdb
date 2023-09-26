import {z} from 'zod';
export const FactionListSchema= z.object({
base: z.coerce.number(),
id: z.coerce.number(),
max_cap: z.coerce.number(),
min_cap: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
see_illusion: z.coerce.number(),
});
export type FactionListType = z.infer<typeof FactionListSchema>;
