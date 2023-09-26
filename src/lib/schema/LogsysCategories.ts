import {z} from 'zod';
export const LogsysCategoriesSchema= z.object({
log_category_description: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
log_category_id: z.coerce.number(),
log_to_console: z.coerce.number(),
log_to_file: z.coerce.number(),
log_to_gmsay: z.coerce.number(),
});
export type LogsysCategoriesType = z.infer<typeof LogsysCategoriesSchema>;
