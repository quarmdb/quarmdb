import {z} from 'zod';
export const BlockedSpellsSchema= z.object({
description: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
message: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellid: z.number(),
type: z.number(),
x: z.number(),
x_diff: z.number(),
y: z.number(),
y_diff: z.number(),
z: z.number(),
z_diff: z.number(),
zoneid: z.number(),
});
export type BlockedSpellsType = z.infer<typeof BlockedSpellsSchema>;
