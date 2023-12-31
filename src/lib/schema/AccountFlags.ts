import {z} from 'zod';
export const AccountFlagsSchema= z.object({
p_accid: z.number(),
p_flag: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
p_value: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type AccountFlagsType = z.infer<typeof AccountFlagsSchema>;
