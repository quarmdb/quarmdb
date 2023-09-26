import {z} from 'zod';
export const HorsesSchema= z.object({
filename: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gender: z.coerce.number(),
mountspeed: z.coerce.number(),
notes: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
race: z.coerce.number(),
texture: z.coerce.number(),
});
export type HorsesType = z.infer<typeof HorsesSchema>;
