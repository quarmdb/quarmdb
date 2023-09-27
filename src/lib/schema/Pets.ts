import {z} from 'zod';
export const PetsSchema= z.object({
equipmentset: z.number(),
monsterflag: z.number(),
npcid: z.number(),
petcontrol: z.number(),
petnaming: z.number(),
petpower: z.number(),
temp: z.number(),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type PetsType = z.infer<typeof PetsSchema>;
