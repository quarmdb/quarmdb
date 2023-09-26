import {z} from 'zod';
export const CharacterInventorySchema= z.object({
charges: z.coerce.number(),
custom_data: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
initialserial: z.coerce.number(),
itemid: z.coerce.number(),
serialnumber: z.coerce.number(),
slotid: z.coerce.number(),
});
export type CharacterInventoryType = z.infer<typeof CharacterInventorySchema>;
