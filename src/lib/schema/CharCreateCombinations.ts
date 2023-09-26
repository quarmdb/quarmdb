import {z} from 'zod';
export const CharCreateCombinationsSchema= z.object({
allocation_id: z.coerce.number(),
class: z.coerce.number(),
deity: z.coerce.number(),
expansions_req: z.coerce.number(),
race: z.coerce.number(),
start_zone: z.coerce.number(),
});
export type CharCreateCombinationsType = z.infer<typeof CharCreateCombinationsSchema>;
