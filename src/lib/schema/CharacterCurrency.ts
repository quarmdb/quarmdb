import {z} from 'zod';
export const CharacterCurrencySchema= z.object({
copper: z.number(),
copper_bank: z.number(),
copper_cursor: z.number(),
gold: z.number(),
gold_bank: z.number(),
gold_cursor: z.number(),
id: z.number(),
platinum: z.number(),
platinum_bank: z.number(),
platinum_cursor: z.number(),
silver: z.number(),
silver_bank: z.number(),
silver_cursor: z.number(),
});
export type CharacterCurrencyType = z.infer<typeof CharacterCurrencySchema>;
