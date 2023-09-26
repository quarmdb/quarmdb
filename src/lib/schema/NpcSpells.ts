import {z} from 'zod';
export const NpcSpellsSchema= z.object({
attack_proc: z.coerce.number(),
defensive_proc: z.coerce.number(),
dproc_chance: z.coerce.number(),
engaged_b_other_chance: z.coerce.number(),
engaged_b_self_chance: z.coerce.number(),
engaged_d_chance: z.coerce.number(),
engaged_no_sp_recast_max: z.coerce.number(),
engaged_no_sp_recast_min: z.coerce.number(),
fail_recast: z.coerce.number(),
id: z.coerce.number(),
idle_b_chance: z.coerce.number(),
idle_no_sp_recast_max: z.coerce.number(),
idle_no_sp_recast_min: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
parent_list: z.coerce.number(),
proc_chance: z.coerce.number(),
pursue_d_chance: z.coerce.number(),
pursue_no_sp_recast_max: z.coerce.number(),
pursue_no_sp_recast_min: z.coerce.number(),
range_proc: z.coerce.number(),
rproc_chance: z.coerce.number(),
});
export type NpcSpellsType = z.infer<typeof NpcSpellsSchema>;
