import {z} from 'zod';
export const CommandsLogSchema= z.object({
acct_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
command: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
entry_id: z.number(),
tar_x: z.number(),
tar_y: z.number(),
tar_z: z.number(),
target: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
target_type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
x: z.number(),
y: z.number(),
z: z.number(),
zone_id: z.number(),
zone_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CommandsLogType = z.infer<typeof CommandsLogSchema>;
