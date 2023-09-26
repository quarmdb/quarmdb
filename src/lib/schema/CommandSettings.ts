import {z} from 'zod';
export const CommandSettingsSchema= z.object({
access: z.coerce.number(),
aliases: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
command: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type CommandSettingsType = z.infer<typeof CommandSettingsSchema>;
