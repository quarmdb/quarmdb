import {z} from 'zod';
export const HorsesSchema= z.object({
filename: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gender: z.number(),
mountspeed: z.number(),
notes: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
race: z.number(),
texture: z.number(),
});
export type HorsesType = z.infer<typeof HorsesSchema>;
