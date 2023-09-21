import {z} from 'zod';
export const CommandSettingsSchema= z.object({
access: z.number(),
aliases: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
command: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CommandSettingsType = z.infer<typeof CommandSettingsSchema>;
