import {z} from 'zod';
export const ZoneStateDumpSchema= z.object({
gmspawntype: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
gmspawntype_count: z.number(),
npc_count: z.number(),
npc_loot: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
npcloot_count: z.number(),
npcs: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spawn2: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spawn2_count: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zonename: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZoneStateDumpType = z.infer<typeof ZoneStateDumpSchema>;
