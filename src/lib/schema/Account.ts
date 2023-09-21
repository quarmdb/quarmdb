import {z} from 'zod';
export const AccountSchema= z.object({
active: z.number(),
ban_reason: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
expansion: z.number(),
flymode: z.number(),
forum_id: z.number(),
gminvul: z.number(),
gmspeed: z.number(),
hideme: z.number(),
id: z.number(),
ignore_tells: z.number(),
ip_exemption_multiplier: z.number(),
karma: z.number(),
lsaccount_id: z.number(),
minilogin_ip: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
mule: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
password: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
revoked: z.number(),
rulesflag: z.number(),
sharedplat: z.number(),
status: z.number(),
suspend_reason: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
suspendeduntil: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
time_creation: z.number(),
});
export type AccountType = z.infer<typeof AccountSchema>;
