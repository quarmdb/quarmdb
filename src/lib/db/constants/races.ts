import { getUseableRaces } from '.';

export const getRaceList = (raceMask: number): string => {
	return getUseableRaces(raceMask)
		.reduce<string[]>((acc, value, idx) => {
			acc.push(value.short_name);
			return acc;
		}, [])
		.join(' ');
};
