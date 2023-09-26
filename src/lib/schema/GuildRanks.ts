import {z} from 'zod';
export const GuildRanksSchema= z.object({
can_demote: z.coerce.number(),
can_hear: z.coerce.number(),
can_invite: z.coerce.number(),
can_motd: z.coerce.number(),
can_promote: z.coerce.number(),
can_remove: z.coerce.number(),
can_speak: z.coerce.number(),
can_warpeace: z.coerce.number(),
guild_id: z.coerce.number(),
rank: z.coerce.number(),
title: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type GuildRanksType = z.infer<typeof GuildRanksSchema>;
