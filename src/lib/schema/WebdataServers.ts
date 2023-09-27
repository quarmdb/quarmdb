import {z} from 'zod';
export const WebdataServersSchema= z.object({
connected: z.number(),
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type WebdataServersType = z.infer<typeof WebdataServersSchema>;
