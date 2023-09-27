import {z} from 'zod';
export const SpawnConditionValuesSchema= z.object({
id: z.number(),
value: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type SpawnConditionValuesType = z.infer<typeof SpawnConditionValuesSchema>;
