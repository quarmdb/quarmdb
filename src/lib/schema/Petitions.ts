import {z} from 'zod';
export const PetitionsSchema= z.object({
accountname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charclass: z.coerce.number(),
charlevel: z.coerce.number(),
charname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
charrace: z.coerce.number(),
checkouts: z.coerce.number(),
dib: z.coerce.number(),
gmtext: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
ischeckedout: z.coerce.number(),
lastgm: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
petid: z.coerce.number(),
petitiontext: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
senttime: z.coerce.number(),
unavailables: z.coerce.number(),
urgency: z.coerce.number(),
zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type PetitionsType = z.infer<typeof PetitionsSchema>;
