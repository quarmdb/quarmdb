import {z} from 'zod';
export const FactionListSchema= z.object({
base: z.number(),
id: z.number(),
max_cap: z.number(),
min_cap: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
see_illusion: z.number(),
});
export type FactionListType = z.infer<typeof FactionListSchema>;
