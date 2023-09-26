import {z} from 'zod';
export const LauncherSchema= z.object({
dynamics: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type LauncherType = z.infer<typeof LauncherSchema>;
