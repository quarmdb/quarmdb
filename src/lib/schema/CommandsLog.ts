import {z} from 'zod';
export const CommandsLogSchema= z.object({
acct_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
char_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
command: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
entry_id: z.coerce.number(),
tar_x: z.coerce.number(),
tar_y: z.coerce.number(),
tar_z: z.coerce.number(),
target: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
target_type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone_id: z.coerce.number(),
zone_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CommandsLogType = z.infer<typeof CommandsLogSchema>;
