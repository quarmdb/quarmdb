import {z} from 'zod';
export const LauncherSchema= z.object({
dynamics: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LauncherType = z.infer<typeof LauncherSchema>;
