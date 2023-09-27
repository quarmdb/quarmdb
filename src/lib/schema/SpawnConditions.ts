import {z} from 'zod';
export const SpawnConditionsSchema= z.object({
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
onchange: z.number(),
value: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnConditionsType = z.infer<typeof SpawnConditionsSchema>;
