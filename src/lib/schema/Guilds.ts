import {z} from 'zod';
export const GuildsSchema= z.object({
channel: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.coerce.number(),
leader: z.coerce.number(),
minstatus: z.coerce.number(),
motd: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
motd_setter: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
tribute: z.coerce.number(),
url: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GuildsType = z.infer<typeof GuildsSchema>;
