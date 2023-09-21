import {z} from 'zod';
export const SpellGlobalsSchema= z.object({
qglobal: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spell_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellid: z.number(),
value: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpellGlobalsType = z.infer<typeof SpellGlobalsSchema>;
