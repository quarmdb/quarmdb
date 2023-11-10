import { getUseableRaces } from '.';

export const getRaceList = (raceMask: number): string => {
	return getUseableRaces(raceMask)
		.reduce<string[]>((acc, value, idx) => {
			acc.push(value.short_name);
			return acc;
		}, [])
		.join(' ');
};

export type PlayerClassExpType = {
	name: string;
	mod: number;
};

export const PlayerClassExp: PlayerClassExpType[] = [
	{ name: 'Barbarian', mod: 105.0 },
	{ name: 'Dwarf', mod: 100.0 },
	{ name: 'Dark Elf', mod: 100.0 },
	{ name: 'Erudite', mod: 100.0 },
	{ name: 'Gnome', mod: 100.0 },
	{ name: 'Halfling', mod: 95.0 },
	{ name: 'Half Elf', mod: 100.0 },
	{ name: 'High Elf', mod: 100.0 },
	{ name: 'Human', mod: 100.0 },
	{ name: 'Iksar', mod: 120.0 },
	{ name: 'Ogre', mod: 115.0 },
	{ name: 'Troll', mod: 120.0 },
	{ name: 'Wood Elf', mod: 100.0 },
	{ name: 'Vahshir', mod: 100.0 }
];
