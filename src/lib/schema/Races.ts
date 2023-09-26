import {z} from 'zod';
export const RacesSchema= z.object({
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
no_coin: z.coerce.number(),
});
export type RacesType = z.infer<typeof RacesSchema>;
