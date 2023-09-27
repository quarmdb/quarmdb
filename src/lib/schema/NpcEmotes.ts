import {z} from 'zod';
export const NpcEmotesSchema= z.object({
emoteid: z.number(),
event_: z.number(),
id: z.number(),
text: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.number(),
});
export type NpcEmotesType = z.infer<typeof NpcEmotesSchema>;
