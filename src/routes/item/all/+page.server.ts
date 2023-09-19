import { ItemSchema, type ItemType } from "$lib/schema";
import { sort_obj_keys } from "$lib/utils";
import { db } from "../../../lib/conn";
import type { PageServerLoadEvent } from './$types';

export async function load({ params }:PageServerLoadEvent) {

  const rows = await db.prepare('SELECT id, name, icon FROM items ORDER BY name').all();

  let parsedRows:ItemType[] = [];

  for(let i = 0; i< rows.length; i++) parsedRows.push(ItemSchema.parse(rows[i]));

  return {
    rows:parsedRows
  }
}