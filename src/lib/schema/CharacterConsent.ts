import {z} from 'zod';
export const CharacterConsentSchema= z.object({
consenter_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
corpse_id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CharacterConsentType = z.infer<typeof CharacterConsentSchema>;
