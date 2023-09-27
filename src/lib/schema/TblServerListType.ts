import {z} from 'zod';
export const TblServerListTypeSchema= z.object({
serverlisttypedescription: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serverlisttypeid: z.number(),
});
export type TblServerListTypeType = z.infer<typeof TblServerListTypeSchema>;
