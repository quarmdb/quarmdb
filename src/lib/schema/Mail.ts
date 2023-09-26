import {z} from 'zod';
export const MailSchema= z.object({
body: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charid: z.coerce.number(),
from: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
msgid: z.coerce.number(),
status: z.coerce.number(),
subject: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
timestamp: z.coerce.number(),
to: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type MailType = z.infer<typeof MailSchema>;
