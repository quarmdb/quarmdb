import {z} from 'zod';
export const ObjectSchema= z.object({
charges: z.number(),
heading: z.number(),
icon: z.number(),
id: z.number(),
incline: z.number(),
itemid: z.number(),
max_expansion: z.number(),
min_expansion: z.number(),
objectname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
size: z.number(),
solid: z.number(),
type: z.number(),
xpos: z.number(),
ypos: z.number(),
zoneid: z.number(),
zpos: z.number(),
});
export type ObjectType = z.infer<typeof ObjectSchema>;
