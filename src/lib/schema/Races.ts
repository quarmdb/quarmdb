import {z} from 'zod';
export const RacesSchema= z.object({
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
no_coin: z.number(),
});
export type RacesType = z.infer<typeof RacesSchema>;
