import {z} from 'zod';
export const TradeskillRecipeEntriesSchema= z.object({
componentcount: z.number(),
failcount: z.number(),
id: z.number(),
iscontainer: z.number(),
item_id: z.number(),
recipe_id: z.number(),
successcount: z.number(),
});
export type TradeskillRecipeEntriesType = z.infer<typeof TradeskillRecipeEntriesSchema>;
