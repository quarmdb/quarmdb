import {z} from 'zod';
export const CharacterInventorySchema= z.object({
charges: z.number(),
custom_data: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
initialserial: z.number(),
itemid: z.number(),
serialnumber: z.number(),
slotid: z.number(),
});
export type CharacterInventoryType = z.infer<typeof CharacterInventorySchema>;
