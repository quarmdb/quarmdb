import {z} from 'zod';
export const TblServerListTypeSchema= z.object({
ServerListTypeDescription: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ServerListTypeID: z.coerce.number(),
});
export type TblServerListTypeType = z.infer<typeof TblServerListTypeSchema>;
