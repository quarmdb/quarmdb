import type { ZoneType } from "$lib/schema";
import { AllZones } from "./zoneidnumber";

export function groupByExpansion(zones: ZoneType[]) {
  const group: Map<number, ZoneType[]> = new Map();
  zones.forEach((zone) => {
    let temp = group.get(zone.expansion);
    if (temp === undefined) temp = [zone];
    else temp.push(zone);
    group.set(zone.expansion, temp);
  });
  return group;
}