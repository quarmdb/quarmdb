import {z} from 'zod';
export const NpcEmotesSchema= z.object({
emoteid: z.coerce.number(),
event_: z.coerce.number(),
id: z.coerce.number(),
text: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.number(),
});
export type NpcEmotesType = z.infer<typeof NpcEmotesSchema>;
