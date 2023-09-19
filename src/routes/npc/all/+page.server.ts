
import { db } from "$lib/conn";
import { NPCSchema, type NPCType } from "$lib/schema";
import type { PageServerLoadEvent } from './$types';
import { z } from 'zod';

export async function load({ params }:PageServerLoadEvent) {

  let rows = await db.prepare('SELECT id, name, level FROM npc_types ORDER BY name').all();

  let parsedRows:NPCType[] = z.array(NPCSchema).parse(rows);
  
  return {
    rows:parsedRows
  }
}