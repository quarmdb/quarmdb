import {z} from 'zod';
export const ObjectContentsSchema= z.object({
bagidx: z.number(),
charges: z.number(),
droptime: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
itemid: z.number(),
parentid: z.number(),
zoneid: z.number(),
});
export type ObjectContentsType = z.infer<typeof ObjectContentsSchema>;
