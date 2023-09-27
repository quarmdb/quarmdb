import {z} from 'zod';
export const QsTraderAuditSchema= z.object({
buyer: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
itemid: z.number(),
itemname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
quantity: z.number(),
seller: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
serialnumber: z.number(),
time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
totalcost: z.number(),
});
export type QsTraderAuditType = z.infer<typeof QsTraderAuditSchema>;
