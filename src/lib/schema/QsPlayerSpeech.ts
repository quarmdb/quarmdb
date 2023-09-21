import {z} from 'zod';
export const QsPlayerSpeechSchema= z.object({
from: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
guilddbid: z.number(),
id: z.number(),
message: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
minstatus: z.number(),
timerecorded: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
type: z.number(),
});
export type QsPlayerSpeechType = z.infer<typeof QsPlayerSpeechSchema>;
