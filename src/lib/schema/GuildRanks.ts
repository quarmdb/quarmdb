import {z} from 'zod';
export const GuildRanksSchema= z.object({
can_demote: z.number(),
can_hear: z.number(),
can_invite: z.number(),
can_motd: z.number(),
can_promote: z.number(),
can_remove: z.number(),
can_speak: z.number(),
can_warpeace: z.number(),
guild_id: z.number(),
rank: z.number(),
title: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GuildRanksType = z.infer<typeof GuildRanksSchema>;
