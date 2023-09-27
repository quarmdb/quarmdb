import {z} from 'zod';
export const NpcSpellsSchema= z.object({
attack_proc: z.number(),
defensive_proc: z.number(),
dproc_chance: z.number(),
engaged_b_other_chance: z.number(),
engaged_b_self_chance: z.number(),
engaged_d_chance: z.number(),
engaged_no_sp_recast_max: z.number(),
engaged_no_sp_recast_min: z.number(),
fail_recast: z.number(),
id: z.number(),
idle_b_chance: z.number(),
idle_no_sp_recast_max: z.number(),
idle_no_sp_recast_min: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
parent_list: z.number(),
proc_chance: z.number(),
pursue_d_chance: z.number(),
pursue_no_sp_recast_max: z.number(),
pursue_no_sp_recast_min: z.number(),
range_proc: z.number(),
rproc_chance: z.number(),
});
export type NpcSpellsType = z.infer<typeof NpcSpellsSchema>;
