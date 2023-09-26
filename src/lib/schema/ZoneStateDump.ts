import {z} from 'zod';
export const ZoneStateDumpSchema= z.object({
gmspawntype: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmspawntype_count: z.coerce.number(),
npc_count: z.coerce.number(),
npc_loot: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
npcloot_count: z.coerce.number(),
npcs: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spawn2: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spawn2_count: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zonename: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZoneStateDumpType = z.infer<typeof ZoneStateDumpSchema>;
