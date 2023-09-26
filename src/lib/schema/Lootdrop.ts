import {z} from 'zod';
export const LootdropSchema= z.object({
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LootdropType = z.infer<typeof LootdropSchema>;
