import {z} from 'zod';
export const ZoneSchema= z.object({
canbind: z.coerce.number(),
cancombat: z.coerce.number(),
canlevitate: z.coerce.number(),
castdungeon: z.coerce.number(),
castoutdoor: z.coerce.number(),
dragaggro: z.coerce.number(),
expansion: z.coerce.number(),
file_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
flag_needed: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
fog_blue: z.coerce.number(),
fog_blue1: z.coerce.number(),
fog_blue2: z.coerce.number(),
fog_blue3: z.coerce.number(),
fog_blue4: z.coerce.number(),
fog_density: z.coerce.number(),
fog_green: z.coerce.number(),
fog_green1: z.coerce.number(),
fog_green2: z.coerce.number(),
fog_green3: z.coerce.number(),
fog_green4: z.coerce.number(),
fog_maxclip: z.coerce.number(),
fog_maxclip1: z.coerce.number(),
fog_maxclip2: z.coerce.number(),
fog_maxclip3: z.coerce.number(),
fog_maxclip4: z.coerce.number(),
fog_minclip: z.coerce.number(),
fog_minclip1: z.coerce.number(),
fog_minclip2: z.coerce.number(),
fog_minclip3: z.coerce.number(),
fog_minclip4: z.coerce.number(),
fog_red: z.coerce.number(),
fog_red1: z.coerce.number(),
fog_red2: z.coerce.number(),
fog_red3: z.coerce.number(),
fog_red4: z.coerce.number(),
graveyard_id: z.coerce.number(),
graveyard_time: z.coerce.number(),
gravity: z.coerce.number(),
hotzone: z.coerce.number(),
id: z.coerce.number(),
long_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
map_file_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
max_z: z.coerce.number(),
maxclients: z.coerce.number(),
maxclip: z.coerce.number(),
min_level: z.coerce.number(),
min_status: z.coerce.number(),
minclip: z.coerce.number(),
music: z.coerce.number(),
never_idle: z.coerce.number(),
note: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
peqzone: z.coerce.number(),
pull_limit: z.coerce.number(),
rain_chance1: z.coerce.number(),
rain_chance2: z.coerce.number(),
rain_chance3: z.coerce.number(),
rain_chance4: z.coerce.number(),
rain_duration1: z.coerce.number(),
rain_duration2: z.coerce.number(),
rain_duration3: z.coerce.number(),
rain_duration4: z.coerce.number(),
random_loc: z.coerce.number(),
reducedspawntimers: z.coerce.number(),
ruleset: z.coerce.number(),
safe_heading: z.coerce.number(),
safe_x: z.coerce.number(),
safe_y: z.coerce.number(),
safe_z: z.coerce.number(),
short_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
shutdowndelay: z.coerce.number(),
skip_los: z.coerce.number(),
sky: z.coerce.number(),
skylock: z.coerce.number(),
snow_chance1: z.coerce.number(),
snow_chance2: z.coerce.number(),
snow_chance3: z.coerce.number(),
snow_chance4: z.coerce.number(),
snow_duration1: z.coerce.number(),
snow_duration2: z.coerce.number(),
snow_duration3: z.coerce.number(),
snow_duration4: z.coerce.number(),
suspendbuffs: z.coerce.number(),
time_type: z.coerce.number(),
timezone: z.coerce.number(),
type: z.coerce.number(),
underworld: z.coerce.number(),
zone_exp_multiplier: z.coerce.number(),
zoneidnumber: z.coerce.number(),
ztype: z.coerce.number(),
});
export type ZoneType = z.infer<typeof ZoneSchema>;
