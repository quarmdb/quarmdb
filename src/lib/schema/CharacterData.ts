import {z} from 'zod';
export const CharacterDataSchema= z.object({
aa_exp: z.number(),
aa_points: z.number(),
aa_points_spent: z.number(),
account_id: z.number(),
agi: z.number(),
air_remaining: z.number(),
anon: z.number(),
autosplit_enabled: z.number(),
beard: z.number(),
beard_color: z.number(),
birthday: z.number(),
boatid: z.number(),
boatname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
cha: z.number(),
class: z.number(),
cur_hp: z.number(),
deity: z.number(),
dex: z.number(),
e_aa_effects: z.number(),
e_betabuff_gear_flag: z.number(),
e_expended_aa_spent: z.number(),
e_hardcore: z.number(),
e_hardcore_death_time: z.number(),
e_percent_to_aa: z.number(),
e_self_found: z.number(),
e_solo_only: z.number(),
endurance: z.number(),
exp: z.number(),
eye_color_1: z.number(),
eye_color_2: z.number(),
face: z.number(),
famished: z.number(),
firstlogon: z.number(),
forum_id: z.number(),
gender: z.number(),
gm: z.number(),
hair_color: z.number(),
hair_style: z.number(),
heading: z.number(),
hunger_level: z.number(),
id: z.number(),
int: z.number(),
intoxication: z.number(),
is_deleted: z.number(),
last_login: z.number(),
last_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
level: z.number(),
level2: z.number(),
mailkey: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
mana: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
points: z.number(),
pvp_status: z.number(),
race: z.number(),
showhelm: z.number(),
sta: z.number(),
str: z.number(),
suffix: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
thirst_level: z.number(),
time_played: z.number(),
title: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
wis: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone_change_count: z.number(),
zone_id: z.number(),
});
export type CharacterDataType = z.infer<typeof CharacterDataSchema>;
