import {z} from 'zod';
export const GuildsSchema= z.object({
channel: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
leader: z.number(),
minstatus: z.number(),
motd: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
motd_setter: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
tribute: z.number(),
url: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GuildsType = z.infer<typeof GuildsSchema>;
