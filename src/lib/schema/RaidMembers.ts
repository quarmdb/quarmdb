import {z} from 'zod';
export const RaidMembersSchema= z.object({
_class: z.number(),
charid: z.number(),
groupid: z.number(),
isgroupleader: z.number(),
islooter: z.number(),
israidleader: z.number(),
level: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
raidid: z.number(),
});
export type RaidMembersType = z.infer<typeof RaidMembersSchema>;
