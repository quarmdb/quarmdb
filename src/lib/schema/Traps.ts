import {z} from 'zod';
export const TrapsSchema= z.object({
chance: z.coerce.number(),
despawn_when_triggered: z.coerce.number(),
effect: z.coerce.number(),
effectvalue: z.coerce.number(),
effectvalue2: z.coerce.number(),
group: z.coerce.number(),
id: z.coerce.number(),
level: z.coerce.number(),
maxzdiff: z.coerce.number(),
message: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
radius: z.coerce.number(),
respawn_time: z.coerce.number(),
respawn_var: z.coerce.number(),
skill: z.coerce.number(),
triggered_number: z.coerce.number(),
undetectable: z.coerce.number(),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type TrapsType = z.infer<typeof TrapsSchema>;
