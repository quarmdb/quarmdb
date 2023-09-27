import {z} from 'zod';
export const DiscoveredItemsSchema= z.object({
account_status: z.number(),
char_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
discovered_date: z.number(),
item_id: z.number(),
});
export type DiscoveredItemsType = z.infer<typeof DiscoveredItemsSchema>;
