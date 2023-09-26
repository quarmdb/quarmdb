import {z} from 'zod';
export const ObjectSchema= z.object({
charges: z.coerce.number(),
heading: z.coerce.number(),
icon: z.coerce.number(),
id: z.coerce.number(),
incline: z.coerce.number(),
itemid: z.coerce.number(),
max_expansion: z.coerce.number(),
min_expansion: z.coerce.number(),
objectname: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
size: z.coerce.number(),
solid: z.coerce.number(),
type: z.coerce.number(),
xpos: z.coerce.number(),
ypos: z.coerce.number(),
zoneid: z.coerce.number(),
zpos: z.coerce.number(),
});
export type ObjectType = z.infer<typeof ObjectSchema>;
