import {z} from 'zod';
export const NpcTypesTintSchema= z.object({
blu1h: z.coerce.number(),
blu2c: z.coerce.number(),
blu3a: z.coerce.number(),
blu4b: z.coerce.number(),
blu5g: z.coerce.number(),
blu6l: z.coerce.number(),
blu7f: z.coerce.number(),
blu8x: z.coerce.number(),
blu9x: z.coerce.number(),
grn1h: z.coerce.number(),
grn2c: z.coerce.number(),
grn3a: z.coerce.number(),
grn4b: z.coerce.number(),
grn5g: z.coerce.number(),
grn6l: z.coerce.number(),
grn7f: z.coerce.number(),
grn8x: z.coerce.number(),
grn9x: z.coerce.number(),
id: z.coerce.number(),
red1h: z.coerce.number(),
red2c: z.coerce.number(),
red3a: z.coerce.number(),
red4b: z.coerce.number(),
red5g: z.coerce.number(),
red6l: z.coerce.number(),
red7f: z.coerce.number(),
red8x: z.coerce.number(),
red9x: z.coerce.number(),
tint_set_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type NpcTypesTintType = z.infer<typeof NpcTypesTintSchema>;
