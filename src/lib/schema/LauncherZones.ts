import {z} from 'zod';
export const LauncherZonesSchema= z.object({
enabled: z.number(),
expansion: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
launcher: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
port: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LauncherZonesType = z.infer<typeof LauncherZonesSchema>;
