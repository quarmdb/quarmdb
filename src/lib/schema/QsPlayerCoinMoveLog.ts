import {z} from 'zod';
export const QsPlayerCoinMoveLogSchema= z.object({
amount: z.number(),
coin_type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
from_char: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_char: z.number(),
to_npc: z.number(),
type: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerCoinMoveLogType = z.infer<typeof QsPlayerCoinMoveLogSchema>;
