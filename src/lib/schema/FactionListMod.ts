import {z} from 'zod';
export const FactionListModSchema= z.object({
faction_id: z.coerce.number(),
id: z.coerce.number(),
mod: z.coerce.number(),
mod_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type FactionListModType = z.infer<typeof FactionListModSchema>;
