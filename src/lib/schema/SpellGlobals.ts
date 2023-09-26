import {z} from 'zod';
export const SpellGlobalsSchema= z.object({
qglobal: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spell_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellid: z.coerce.number(),
value: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpellGlobalsType = z.infer<typeof SpellGlobalsSchema>;
