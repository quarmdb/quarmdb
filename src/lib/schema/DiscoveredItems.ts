import {z} from 'zod';
export const DiscoveredItemsSchema= z.object({
account_status: z.coerce.number(),
char_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
discovered_date: z.coerce.number(),
item_id: z.coerce.number(),
});
export type DiscoveredItemsType = z.infer<typeof DiscoveredItemsSchema>;
