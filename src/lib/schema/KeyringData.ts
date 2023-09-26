import {z} from 'zod';
export const KeyringDataSchema= z.object({
key_item: z.coerce.number(),
key_name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
stage: z.coerce.number(),
zoneid: z.coerce.number(),
});
export type KeyringDataType = z.infer<typeof KeyringDataSchema>;
