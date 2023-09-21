import {z} from 'zod';
export const EventlogSchema= z.object({
accountid: z.number(),
accountname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
description: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
descriptiontype: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
event_nid: z.number(),
id: z.number(),
status: z.number(),
target: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type EventlogType = z.infer<typeof EventlogSchema>;
