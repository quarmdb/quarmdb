import {z} from 'zod';
export const GuildMembersSchema= z.object({
alt: z.number(),
banker: z.number(),
char_id: z.number(),
guild_id: z.number(),
last_tribute: z.number(),
public_note: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rank: z.number(),
total_tribute: z.number(),
tribute_enable: z.number(),
});
export type GuildMembersType = z.infer<typeof GuildMembersSchema>;
