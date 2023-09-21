import {z} from 'zod';
export const ItemTickSchema= z.object({
it_bagslot: z.number(),
it_chance: z.number(),
it_id: z.number(),
it_itemid: z.number(),
it_level: z.number(),
it_qglobal: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ItemTickType = z.infer<typeof ItemTickSchema>;
