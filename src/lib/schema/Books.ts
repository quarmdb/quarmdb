import {z} from 'zod';
export const BooksSchema= z.object({
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
txtfile: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type BooksType = z.infer<typeof BooksSchema>;
