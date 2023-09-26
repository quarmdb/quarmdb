import {z} from 'zod';
export const BugsSchema= z.object({
_can_duplicate: z.coerce.number(),
_character_flags: z.coerce.number(),
_crash_bug: z.coerce.number(),
_target_info: z.coerce.number(),
bug: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
date: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
flag: z.coerce.number(),
id: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
status: z.coerce.number(),
target: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ui: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
x: z.coerce.number(),
y: z.coerce.number(),
z: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type BugsType = z.infer<typeof BugsSchema>;
