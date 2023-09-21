import {z} from 'zod';
export const GroupLeadersSchema= z.object({
gid: z.number(),
leadername: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
oldleadername: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GroupLeadersType = z.infer<typeof GroupLeadersSchema>;
