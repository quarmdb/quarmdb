import {z} from 'zod';
export const ItemTickSchema= z.object({
it_bagslot: z.coerce.number(),
it_chance: z.coerce.number(),
it_id: z.coerce.number(),
it_itemid: z.coerce.number(),
it_level: z.coerce.number(),
it_qglobal: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ItemTickType = z.infer<typeof ItemTickSchema>;
