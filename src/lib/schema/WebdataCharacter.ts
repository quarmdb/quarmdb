import {z} from 'zod';
export const WebdataCharacterSchema= z.object({
id: z.number(),
last_login: z.number(),
last_seen: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type WebdataCharacterType = z.infer<typeof WebdataCharacterSchema>;
