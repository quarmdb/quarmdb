import {z} from 'zod';
export const DoorsSchema= z.object({
altkeyitem: z.coerce.number(),
can_open: z.coerce.number(),
client_version_mask: z.coerce.number(),
close_time: z.coerce.number(),
dest_heading: z.coerce.number(),
dest_x: z.coerce.number(),
dest_y: z.coerce.number(),
dest_z: z.coerce.number(),
dest_zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
door_param: z.coerce.number(),
doorid: z.coerce.number(),
doorisopen: z.coerce.number(),
heading: z.coerce.number(),
id: z.coerce.number(),
incline: z.coerce.number(),
invert_state: z.coerce.number(),
islift: z.coerce.number(),
keyitem: z.coerce.number(),
lockpick: z.coerce.number(),
max_expansion: z.coerce.number(),
min_expansion: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
nokeyring: z.coerce.number(),
opentype: z.coerce.number(),
pos_x: z.coerce.number(),
pos_y: z.coerce.number(),
pos_z: z.coerce.number(),
size: z.coerce.number(),
triggerdoor: z.coerce.number(),
triggertype: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type DoorsType = z.infer<typeof DoorsSchema>;
