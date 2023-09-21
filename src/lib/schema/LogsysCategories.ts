import {z} from 'zod';
export const LogsysCategoriesSchema= z.object({
log_category_description: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
log_category_id: z.number(),
log_to_console: z.number(),
log_to_file: z.number(),
log_to_gmsay: z.number(),
});
export type LogsysCategoriesType = z.infer<typeof LogsysCategoriesSchema>;
