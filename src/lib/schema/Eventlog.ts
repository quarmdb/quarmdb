import {z} from 'zod';
export const EventlogSchema= z.object({
accountid: z.coerce.number(),
accountname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
description: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
descriptiontype: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
event_nid: z.coerce.number(),
id: z.coerce.number(),
status: z.coerce.number(),
target: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type EventlogType = z.infer<typeof EventlogSchema>;
