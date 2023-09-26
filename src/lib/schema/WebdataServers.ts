import {z} from 'zod';
export const WebdataServersSchema= z.object({
connected: z.coerce.number(),
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type WebdataServersType = z.infer<typeof WebdataServersSchema>;
