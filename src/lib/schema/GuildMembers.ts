import {z} from 'zod';
export const GuildMembersSchema= z.object({
alt: z.coerce.number(),
banker: z.coerce.number(),
char_id: z.coerce.number(),
guild_id: z.coerce.number(),
last_tribute: z.coerce.number(),
public_note: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
rank: z.coerce.number(),
total_tribute: z.coerce.number(),
tribute_enable: z.coerce.number(),
});
export type GuildMembersType = z.infer<typeof GuildMembersSchema>;
