import {z} from 'zod';
export const SpawnConditionsSchema= z.object({
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
onchange: z.coerce.number(),
value: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnConditionsType = z.infer<typeof SpawnConditionsSchema>;
