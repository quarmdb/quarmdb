import {z} from 'zod';
export const KeyringDataSchema= z.object({
key_item: z.number(),
key_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
stage: z.number(),
zoneid: z.number(),
});
export type KeyringDataType = z.infer<typeof KeyringDataSchema>;
