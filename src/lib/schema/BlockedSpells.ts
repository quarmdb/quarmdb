import {z} from 'zod';
export const BlockedSpellsSchema= z.object({
description: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
message: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellid: z.coerce.number(),
type: z.coerce.number(),
x: z.coerce.number(),
x_diff: z.coerce.number(),
y: z.coerce.number(),
y_diff: z.coerce.number(),
z: z.coerce.number(),
z_diff: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type BlockedSpellsType = z.infer<typeof BlockedSpellsSchema>;
