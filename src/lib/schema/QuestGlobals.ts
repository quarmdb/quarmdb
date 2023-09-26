import {z} from 'zod';
export const QuestGlobalsSchema= z.object({
charid: z.coerce.number(),
expdate: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
npcid: z.coerce.number(),
value: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zoneid: z.coerce.number(),
});
export type QuestGlobalsType = z.infer<typeof QuestGlobalsSchema>;
