import {z} from 'zod';
export const ZoneServerSchema= z.object({
address: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
last_alive: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
player_count: z.number(),
port: z.number(),
rain: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZoneServerType = z.infer<typeof ZoneServerSchema>;
