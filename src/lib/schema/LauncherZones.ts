import {z} from 'zod';
export const LauncherZonesSchema= z.object({
enabled: z.coerce.number(),
expansion: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
launcher: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
port: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LauncherZonesType = z.infer<typeof LauncherZonesSchema>;
