import {z} from 'zod';
export const NpcFactionSchema= z.object({
id: z.number(),
ignore_primary_assist: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
primaryfaction: z.number(),
});
export type NpcFactionType = z.infer<typeof NpcFactionSchema>;
