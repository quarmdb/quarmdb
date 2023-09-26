import {z} from 'zod';
export const CharacterDataSchema= z.object({
aa_exp: z.coerce.number(),
aa_points: z.coerce.number(),
aa_points_spent: z.coerce.number(),
account_id: z.coerce.number(),
agi: z.coerce.number(),
air_remaining: z.coerce.number(),
anon: z.coerce.number(),
autosplit_enabled: z.coerce.number(),
beard: z.coerce.number(),
beard_color: z.coerce.number(),
birthday: z.coerce.number(),
boatid: z.coerce.number(),
boatname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
cha: z.coerce.number(),
class: z.coerce.number(),
cur_hp: z.coerce.number(),
deity: z.coerce.number(),
dex: z.coerce.number(),
e_aa_effects: z.coerce.number(),
e_betabuff_gear_flag: z.coerce.number(),
e_expended_aa_spent: z.coerce.number(),
e_hardcore: z.coerce.number(),
e_hardcore_death_time: z.coerce.number(),
e_percent_to_aa: z.coerce.number(),
e_self_found: z.coerce.number(),
e_solo_only: z.coerce.number(),
endurance: z.coerce.number(),
exp: z.coerce.number(),
eye_color_1: z.coerce.number(),
eye_color_2: z.coerce.number(),
face: z.coerce.number(),
famished: z.coerce.number(),
firstlogon: z.coerce.number(),
forum_id: z.coerce.number(),
gender: z.coerce.number(),
gm: z.coerce.number(),
hair_color: z.coerce.number(),
hair_style: z.coerce.number(),
heading: z.coerce.number(),
hunger_level: z.coerce.number(),
id: z.coerce.number(),
int: z.coerce.number(),
intoxication: z.coerce.number(),
is_deleted: z.coerce.number(),
last_login: z.coerce.number(),
last_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
level: z.coerce.number(),
level2: z.coerce.number(),
mailkey: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
mana: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
points: z.coerce.number(),
pvp_status: z.coerce.number(),
race: z.coerce.number(),
showhelm: z.coerce.number(),
sta: z.coerce.number(),
str: z.coerce.number(),
suffix: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
thirst_level: z.coerce.number(),
time_played: z.coerce.number(),
title: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
wis: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_change_count: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type CharacterDataType = z.infer<typeof CharacterDataSchema>;
