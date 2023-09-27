import {z} from 'zod';
export const DoorsSchema= z.object({
altkeyitem: z.number(),
can_open: z.number(),
client_version_mask: z.number(),
close_time: z.number(),
dest_heading: z.number(),
dest_x: z.number(),
dest_y: z.number(),
dest_z: z.number(),
dest_zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
door_param: z.number(),
doorid: z.number(),
doorisopen: z.number(),
heading: z.number(),
id: z.number(),
incline: z.number(),
invert_state: z.number(),
islift: z.number(),
keyitem: z.number(),
lockpick: z.number(),
max_expansion: z.number(),
min_expansion: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
nokeyring: z.number(),
opentype: z.number(),
pos_x: z.number(),
pos_y: z.number(),
pos_z: z.number(),
size: z.number(),
triggerdoor: z.number(),
triggertype: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type DoorsType = z.infer<typeof DoorsSchema>;
