import {z} from 'zod';
export const ObjectContentsSchema= z.object({
bagidx: z.coerce.number(),
charges: z.coerce.number(),
droptime: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
itemid: z.coerce.number(),
parentid: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type ObjectContentsType = z.infer<typeof ObjectContentsSchema>;
