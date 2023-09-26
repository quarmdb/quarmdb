import {z} from 'zod';
export const PetsSchema= z.object({
equipmentset: z.coerce.number(),
monsterflag: z.coerce.number(),
npcID: z.coerce.number(),
petcontrol: z.coerce.number(),
petnaming: z.coerce.number(),
petpower: z.coerce.number(),
temp: z.coerce.number(),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type PetsType = z.infer<typeof PetsSchema>;
