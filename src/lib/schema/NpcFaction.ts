import {z} from 'zod';
export const NpcFactionSchema= z.object({
id: z.coerce.number(),
ignore_primary_assist: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
primaryfaction: z.coerce.number(),
});
export type NpcFactionType = z.infer<typeof NpcFactionSchema>;
