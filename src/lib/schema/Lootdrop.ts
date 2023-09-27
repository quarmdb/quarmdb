import {z} from 'zod';
export const LootdropSchema= z.object({
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LootdropType = z.infer<typeof LootdropSchema>;
