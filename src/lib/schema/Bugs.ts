import {z} from 'zod';
export const BugsSchema= z.object({
_can_duplicate: z.number(),
_character_flags: z.number(),
_crash_bug: z.number(),
_target_info: z.number(),
bug: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
date: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
flag: z.number(),
id: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
status: z.number(),
target: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ui: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
x: z.number(),
y: z.number(),
z: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type BugsType = z.infer<typeof BugsSchema>;
