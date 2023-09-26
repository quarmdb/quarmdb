import {z} from 'zod';
export const CharacterCurrencySchema= z.object({
copper: z.coerce.number(),
copper_bank: z.coerce.number(),
copper_cursor: z.coerce.number(),
gold: z.coerce.number(),
gold_bank: z.coerce.number(),
gold_cursor: z.coerce.number(),
id: z.coerce.number(),
platinum: z.coerce.number(),
platinum_bank: z.coerce.number(),
platinum_cursor: z.coerce.number(),
silver: z.coerce.number(),
silver_bank: z.coerce.number(),
silver_cursor: z.coerce.number(),
});
export type CharacterCurrencyType = z.infer<typeof CharacterCurrencySchema>;
