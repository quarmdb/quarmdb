import {z} from 'zod';
export const ZoneServerSchema= z.object({
address: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
last_alive: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
player_count: z.coerce.number(),
port: z.coerce.number(),
rain: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZoneServerType = z.infer<typeof ZoneServerSchema>;
