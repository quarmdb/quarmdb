import {z} from 'zod';
export const TrapsSchema= z.object({
chance: z.number(),
despawn_when_triggered: z.number(),
effect: z.number(),
effectvalue: z.number(),
effectvalue2: z.number(),
group: z.number(),
id: z.number(),
level: z.number(),
maxzdiff: z.number(),
message: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
radius: z.number(),
respawn_time: z.number(),
respawn_var: z.number(),
skill: z.number(),
triggered_number: z.number(),
undetectable: z.number(),
x: z.number(),
y: z.number(),
z: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type TrapsType = z.infer<typeof TrapsSchema>;
