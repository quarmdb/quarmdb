import {z} from 'zod';
export const LoottableSchema= z.object({
avgcoin: z.number(),
done: z.number(),
id: z.number(),
maxcash: z.number(),
mincash: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LoottableType = z.infer<typeof LoottableSchema>;
