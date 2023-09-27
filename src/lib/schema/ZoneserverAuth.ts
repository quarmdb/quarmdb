import {z} from 'zod';
export const ZoneserverAuthSchema= z.object({
host: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
note: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type ZoneserverAuthType = z.infer<typeof ZoneserverAuthSchema>;
