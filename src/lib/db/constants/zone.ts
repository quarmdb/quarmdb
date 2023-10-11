import type { ZoneType } from '$lib/schema';
import { z } from 'zod';
import { AllZones } from './zoneidnumber';

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

export const ZoneShortInfoSchema = z.object({
	id: z.number(),
	short_name: z.string(),
	long_name: z.string(),
	expansion: z.number()
});

export type ZoneShortInfoType = z.infer<typeof ZoneShortInfoSchema>;

export function groupByExpansionShortInfo(zones: ZoneShortInfoType[]) {
	const group: Map<number, ZoneShortInfoType[]> = new Map();
	zones.forEach((zone) => {
		let temp = group.get(zone.expansion);
		if (temp === undefined) temp = [zone];
		else temp.push(zone);
		group.set(zone.expansion, temp);
	});
	return group;
}
