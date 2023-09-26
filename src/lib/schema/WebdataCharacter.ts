import {z} from 'zod';
export const WebdataCharacterSchema= z.object({
id: z.coerce.number(),
last_login: z.coerce.number(),
last_seen: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type WebdataCharacterType = z.infer<typeof WebdataCharacterSchema>;
