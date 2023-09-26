import {z} from 'zod';
export const QsPlayerSpeechSchema= z.object({
from: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
guilddbid: z.coerce.number(),
id: z.coerce.number(),
message: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
minstatus: z.coerce.number(),
timerecorded: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.coerce.number(),
});
export type QsPlayerSpeechType = z.infer<typeof QsPlayerSpeechSchema>;
