import {z} from 'zod';
export const CharCreateCombinationsSchema= z.object({
allocation_id: z.number(),
class: z.number(),
deity: z.number(),
expansions_req: z.number(),
race: z.number(),
start_zone: z.number(),
});
export type CharCreateCombinationsType = z.infer<typeof CharCreateCombinationsSchema>;
