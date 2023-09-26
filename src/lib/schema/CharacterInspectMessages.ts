import {z} from 'zod';
export const CharacterInspectMessagesSchema= z.object({
id: z.coerce.number(),
inspect_message: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CharacterInspectMessagesType = z.infer<typeof CharacterInspectMessagesSchema>;
