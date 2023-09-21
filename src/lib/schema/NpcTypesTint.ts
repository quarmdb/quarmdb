import {z} from 'zod';
export const NpcTypesTintSchema= z.object({
blu1h: z.number(),
blu2c: z.number(),
blu3a: z.number(),
blu4b: z.number(),
blu5g: z.number(),
blu6l: z.number(),
blu7f: z.number(),
blu8x: z.number(),
blu9x: z.number(),
grn1h: z.number(),
grn2c: z.number(),
grn3a: z.number(),
grn4b: z.number(),
grn5g: z.number(),
grn6l: z.number(),
grn7f: z.number(),
grn8x: z.number(),
grn9x: z.number(),
id: z.number(),
red1h: z.number(),
red2c: z.number(),
red3a: z.number(),
red4b: z.number(),
red5g: z.number(),
red6l: z.number(),
red7f: z.number(),
red8x: z.number(),
red9x: z.number(),
tint_set_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type NpcTypesTintType = z.infer<typeof NpcTypesTintSchema>;
