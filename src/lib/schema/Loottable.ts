import {z} from 'zod';
export const LoottableSchema= z.object({
avgcoin: z.coerce.number(),
done: z.coerce.number(),
id: z.coerce.number(),
maxcash: z.coerce.number(),
mincash: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LoottableType = z.infer<typeof LoottableSchema>;
