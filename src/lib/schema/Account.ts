import {z} from 'zod';
export const AccountSchema= z.object({
active: z.coerce.number(),
ban_reason: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
expansion: z.coerce.number(),
flymode: z.coerce.number(),
forum_id: z.coerce.number(),
gminvul: z.coerce.number(),
gmspeed: z.coerce.number(),
hideme: z.coerce.number(),
id: z.coerce.number(),
ignore_tells: z.coerce.number(),
ip_exemption_multiplier: z.coerce.number(),
karma: z.coerce.number(),
lsaccount_id: z.coerce.number(),
minilogin_ip: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
mule: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
password: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
revoked: z.coerce.number(),
rulesflag: z.coerce.number(),
sharedplat: z.coerce.number(),
status: z.coerce.number(),
suspend_reason: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
suspendeduntil: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time_creation: z.coerce.number(),
});
export type AccountType = z.infer<typeof AccountSchema>;
