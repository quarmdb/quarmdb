import {z} from 'zod';
export const PetitionsSchema= z.object({
accountname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charclass: z.number(),
charlevel: z.number(),
charname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charrace: z.number(),
checkouts: z.number(),
dib: z.number(),
gmtext: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ischeckedout: z.number(),
lastgm: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
petid: z.number(),
petitiontext: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
senttime: z.number(),
unavailables: z.number(),
urgency: z.number(),
zone: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type PetitionsType = z.infer<typeof PetitionsSchema>;
