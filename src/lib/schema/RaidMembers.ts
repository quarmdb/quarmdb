import {z} from 'zod';
export const RaidMembersSchema= z.object({
_class: z.coerce.number(),
charid: z.coerce.number(),
groupid: z.coerce.number(),
isgroupleader: z.coerce.number(),
islooter: z.coerce.number(),
israidleader: z.coerce.number(),
level: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
raidid: z.coerce.number(),
});
export type RaidMembersType = z.infer<typeof RaidMembersSchema>;
