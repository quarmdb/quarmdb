import {z} from 'zod';
export const FactionListModSchema= z.object({
faction_id: z.number(),
id: z.number(),
mod: z.number(),
mod_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type FactionListModType = z.infer<typeof FactionListModSchema>;
