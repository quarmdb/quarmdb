import {z} from 'zod';
export const QuestGlobalsSchema= z.object({
charid: z.number(),
expdate: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
npcid: z.number(),
value: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zoneid: z.number(),
});
export type QuestGlobalsType = z.infer<typeof QuestGlobalsSchema>;
