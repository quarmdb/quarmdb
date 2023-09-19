import {z} from 'zod';

export const ItemSchema = z.object({
  id: z.number(),
  Name: z.string(),
  icon: z.number()
});

export type ItemType = z.infer<typeof ItemSchema>;

export const NPCSchema = z.object({
  id:z.number(), 
  name:z.string(), 
  level:z.number()
});

export type NPCType = z.infer<typeof NPCSchema>;