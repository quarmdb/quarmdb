import { ItemsSchema, type ItemsType } from "$lib/schema";
import type {z} from 'zod';
import { db } from "../../../lib/conn";
import type { PageServerLoadEvent } from './$types';
import { error } from "console";

export async function load({ params }:PageServerLoadEvent) {
  const ItemsOverviewSchema = ItemsSchema.pick({id: true, Name: true, icon:true});
  type ItemsOverviewType = z.infer<typeof ItemsOverviewSchema>
  const rows = await db.prepare('SELECT id, name, icon FROM items ORDER BY name').all();

  let parsedRows:ItemsOverviewType[] = [];


  for(let i = 0; i< rows.length; i++) {
    let parsedRow = ItemsOverviewSchema.safeParse(rows[i]);
    if(!parsedRow.success) 
      throw error(parsedRow.error);
    parsedRows.push(parsedRow.data);
  }

  return {
    rows:parsedRows
  }
}