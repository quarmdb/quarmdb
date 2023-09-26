import {z} from 'zod';
export const QsPlayerCoinMoveLogSchema= z.object({
amount: z.coerce.number(),
coin_type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
from_char: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
to_char: z.coerce.number(),
to_npc: z.coerce.number(),
type: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type QsPlayerCoinMoveLogType = z.infer<typeof QsPlayerCoinMoveLogSchema>;
