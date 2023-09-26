import {z} from 'zod';
export const QsTraderAuditSchema= z.object({
buyer: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
itemid: z.coerce.number(),
itemname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
quantity: z.coerce.number(),
seller: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serialnumber: z.coerce.number(),
time: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
totalcost: z.coerce.number(),
});
export type QsTraderAuditType = z.infer<typeof QsTraderAuditSchema>;
