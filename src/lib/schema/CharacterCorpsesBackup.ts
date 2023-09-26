import {z} from 'zod';
export const CharacterCorpsesBackupSchema= z.object({
beard: z.coerce.number(),
beard_color: z.coerce.number(),
charid: z.coerce.number(),
charname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
class: z.coerce.number(),
copper: z.coerce.number(),
deity: z.coerce.number(),
exp: z.coerce.number(),
eye_color_1: z.coerce.number(),
eye_color_2: z.coerce.number(),
face: z.coerce.number(),
gender: z.coerce.number(),
gmexp: z.coerce.number(),
gold: z.coerce.number(),
hair_color: z.coerce.number(),
hair_style: z.coerce.number(),
heading: z.coerce.number(),
helm_texture: z.coerce.number(),
id: z.coerce.number(),
is_buried: z.coerce.number(),
is_locked: z.coerce.number(),
is_rezzed: z.coerce.number(),
killedby: z.coerce.number(),
level: z.coerce.number(),
platinum: z.coerce.number(),
race: z.coerce.number(),
rez_time: z.coerce.number(),
rezzable: z.coerce.number(),
silver: z.coerce.number(),
size: z.coerce.number(),
texture: z.coerce.number(),
time_of_death: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
was_at_graveyard: z.coerce.number(),
wc_1: z.coerce.number(),
wc_2: z.coerce.number(),
wc_3: z.coerce.number(),
wc_4: z.coerce.number(),
wc_5: z.coerce.number(),
wc_6: z.coerce.number(),
wc_7: z.coerce.number(),
wc_8: z.coerce.number(),
wc_9: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_id: z.coerce.number(),
});
export type CharacterCorpsesBackupType = z.infer<typeof CharacterCorpsesBackupSchema>;
