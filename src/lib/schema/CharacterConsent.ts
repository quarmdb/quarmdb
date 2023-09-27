import {z} from 'zod';
export const CharacterConsentSchema= z.object({
consenter_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
corpse_id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CharacterConsentType = z.infer<typeof CharacterConsentSchema>;
