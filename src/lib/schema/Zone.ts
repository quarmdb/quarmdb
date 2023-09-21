import {z} from 'zod';
export const ZoneSchema= z.object({
canbind: z.number(),
cancombat: z.number(),
canlevitate: z.number(),
castdungeon: z.number(),
castoutdoor: z.number(),
dragaggro: z.number(),
expansion: z.number(),
file_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
flag_needed: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
fog_blue: z.number(),
fog_blue1: z.number(),
fog_blue2: z.number(),
fog_blue3: z.number(),
fog_blue4: z.number(),
fog_density: z.number(),
fog_green: z.number(),
fog_green1: z.number(),
fog_green2: z.number(),
fog_green3: z.number(),
fog_green4: z.number(),
fog_maxclip: z.number(),
fog_maxclip1: z.number(),
fog_maxclip2: z.number(),
fog_maxclip3: z.number(),
fog_maxclip4: z.number(),
fog_minclip: z.number(),
fog_minclip1: z.number(),
fog_minclip2: z.number(),
fog_minclip3: z.number(),
fog_minclip4: z.number(),
fog_red: z.number(),
fog_red1: z.number(),
fog_red2: z.number(),
fog_red3: z.number(),
fog_red4: z.number(),
graveyard_id: z.number(),
graveyard_time: z.number(),
gravity: z.number(),
hotzone: z.number(),
id: z.number(),
long_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
map_file_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
max_z: z.number(),
maxclients: z.number(),
maxclip: z.number(),
min_level: z.number(),
min_status: z.number(),
minclip: z.number(),
music: z.number(),
never_idle: z.number(),
note: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
peqzone: z.number(),
pull_limit: z.number(),
rain_chance1: z.number(),
rain_chance2: z.number(),
rain_chance3: z.number(),
rain_chance4: z.number(),
rain_duration1: z.number(),
rain_duration2: z.number(),
rain_duration3: z.number(),
rain_duration4: z.number(),
random_loc: z.number(),
reducedspawntimers: z.number(),
ruleset: z.number(),
safe_heading: z.number(),
safe_x: z.number(),
safe_y: z.number(),
safe_z: z.number(),
short_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
shutdowndelay: z.number(),
skip_los: z.number(),
sky: z.number(),
skylock: z.number(),
snow_chance1: z.number(),
snow_chance2: z.number(),
snow_chance3: z.number(),
snow_chance4: z.number(),
snow_duration1: z.number(),
snow_duration2: z.number(),
snow_duration3: z.number(),
snow_duration4: z.number(),
suspendbuffs: z.number(),
time_type: z.number(),
timezone: z.number(),
type: z.number(),
underworld: z.number(),
zone_exp_multiplier: z.number(),
zoneidnumber: z.number(),
ztype: z.number(),
});
export type ZoneType = z.infer<typeof ZoneSchema>;
