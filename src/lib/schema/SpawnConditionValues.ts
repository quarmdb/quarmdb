import {z} from 'zod';
export const SpawnConditionValuesSchema= z.object({
id: z.coerce.number(),
value: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnConditionValuesType = z.infer<typeof SpawnConditionValuesSchema>;
