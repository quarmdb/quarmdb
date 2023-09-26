import {z} from 'zod';
export const TradeskillRecipeEntriesSchema= z.object({
componentcount: z.coerce.number(),
failcount: z.coerce.number(),
id: z.coerce.number(),
iscontainer: z.coerce.number(),
item_id: z.coerce.number(),
recipe_id: z.coerce.number(),
successcount: z.coerce.number(),
});
export type TradeskillRecipeEntriesType = z.infer<typeof TradeskillRecipeEntriesSchema>;
