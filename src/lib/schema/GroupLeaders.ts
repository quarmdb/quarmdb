import {z} from 'zod';
export const GroupLeadersSchema= z.object({
gid: z.coerce.number(),
leadername: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
oldleadername: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GroupLeadersType = z.infer<typeof GroupLeadersSchema>;
