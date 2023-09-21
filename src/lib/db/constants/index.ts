type MaskType = {
	mask: number;
};

export function getFromMask<T extends MaskType>(search: number, listToSearch: T[]): T[] {
	let list = new Set<T>();

	for (let i = 0; i < listToSearch.length; i++) {
		let current = listToSearch[i];
		if ((current.mask & search) === current.mask) list.add(current);
	}

	return [...list];
}

export type PlayerClassType = {
	id: number;
	name: string;
	shortName: string;
	mask: number;
	spellListID?: number;
};

export const playerClassList: PlayerClassType[] = [
	{ id: 1, name: 'Warrior', shortName: 'WAR', mask: 1 << 0 },
	{ id: 2, name: 'Cleric', shortName: 'CLR', mask: 1 << 1, spellListID: 1 },
	{ id: 3, name: 'Paladin', shortName: 'PAL', mask: 1 << 2, spellListID: 8 },
	{ id: 4, name: 'Ranger', shortName: 'RNG', mask: 1 << 3, spellListID: 10 },
	{ id: 5, name: 'Shadow Knight', shortName: 'SHD', mask: 1 << 4, spellListID: 9 },
	{ id: 6, name: 'Druid', shortName: 'DRU', mask: 1 << 5, spellListID: 7 },
	{ id: 7, name: 'Monk', shortName: 'MNK', mask: 1 << 6 },
	{ id: 8, name: 'Bard', shortName: 'BRD', mask: 1 << 7, spellListID: 11 },
	{ id: 9, name: 'Rogue', shortName: 'ROG', mask: 1 << 8 },
	{ id: 10, name: 'Shaman', shortName: 'SHM', mask: 1 << 9, spellListID: 6 },
	{ id: 11, name: 'Necromancer', shortName: 'NEC', mask: 1 << 10, spellListID: 3 },
	{ id: 12, name: 'Wizard', shortName: 'WIZ', mask: 1 << 11, spellListID: 2 },
	{ id: 13, name: 'Magician', shortName: 'MAG', mask: 1 << 12, spellListID: 4 },
	{ id: 14, name: 'Enchanter', shortName: 'ENC', mask: 1 << 13, spellListID: 5 },
	{ id: 15, name: 'Beastlord', shortName: 'BST', mask: 1 << 14, spellListID: 12 },
	{ id: 15, name: 'Beastlord', shortName: 'BST', mask: 1 << 15 }
];

export function getUseableClasses(search: number): PlayerClassType[] {
	return getFromMask<PlayerClassType>(search, playerClassList);
}

export type PlayerRaceType = {
	id: number;
	mask: number;
	shortName: string;
	name: string;
};

export const playerRaceList: PlayerRaceType[] = [
	{ id: 1, name: 'Human', shortName: 'HUM', mask: 1 << 0 },
	{ id: 2, name: 'Barbarian', shortName: 'BAR', mask: 1 << 1 },
	{ id: 3, name: 'Erudite', shortName: 'ERU', mask: 1 << 2 },
	{ id: 4, name: 'Wood Elf', shortName: 'ELF', mask: 1 << 3 },
	{ id: 5, name: 'High Elf', shortName: 'HIE', mask: 1 << 4 },
	{ id: 6, name: 'Dark_Elf', shortName: 'DEF', mask: 1 << 5 },
	{ id: 7, name: 'Half Elf', shortName: 'HEF', mask: 1 << 6 },
	{ id: 8, name: 'Dwarf', shortName: 'DWF', mask: 1 << 7 },
	{ id: 9, name: 'Troll', shortName: 'TRL', mask: 1 << 8 },
	{ id: 10, name: 'Ogre', shortName: 'OGR', mask: 1 << 9 },
	{ id: 11, name: 'Halfling', shortName: 'HFL', mask: 1 << 10 },
	{ id: 12, name: 'Gnome', shortName: 'GNM', mask: 1 << 11 },
	{ id: 13, name: 'Iksar', shortName: 'IKS', mask: 1 << 12 },
	{ id: 14, name: 'Vah Shir', shortName: 'VAH', mask: 1 << 13 },
	{ id: 15, name: 'Froglok', shortName: 'VAH', mask: 1 << 14 },
	{ id: 16, name: 'Drakkin', shortName: 'VAH', mask: 1 << 15 }
];

export function getUseableRaces(search: number): PlayerRaceType[] {
	return getFromMask<PlayerRaceType>(search, playerRaceList);
}
