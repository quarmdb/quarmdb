import {z} from 'zod';
export const MailSchema= z.object({
body: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charid: z.number(),
from: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
msgid: z.number(),
status: z.number(),
subject: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
timestamp: z.number(),
to: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type MailType = z.infer<typeof MailSchema>;
