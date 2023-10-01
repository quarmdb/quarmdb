import { getFromMask } from '.';

export type PlayerClassType = {
	id: number;
	long_name: string;
	short_name: string;
	mask: number;
	spellListID?: number;
};

export const playerClassList: PlayerClassType[] = [
	{ id: 1, long_name: 'Warrior', short_name: 'WAR', mask: 1 << 0 },
	{ id: 2, long_name: 'Cleric', short_name: 'CLR', mask: 1 << 1, spellListID: 1 },
	{ id: 3, long_name: 'Paladin', short_name: 'PAL', mask: 1 << 2, spellListID: 8 },
	{ id: 4, long_name: 'Ranger', short_name: 'RNG', mask: 1 << 3, spellListID: 10 },
	{ id: 5, long_name: 'Shadow Knight', short_name: 'SHD', mask: 1 << 4, spellListID: 9 },
	{ id: 6, long_name: 'Druid', short_name: 'DRU', mask: 1 << 5, spellListID: 7 },
	{ id: 7, long_name: 'Monk', short_name: 'MNK', mask: 1 << 6 },
	{ id: 8, long_name: 'Bard', short_name: 'BRD', mask: 1 << 7, spellListID: 11 },
	{ id: 9, long_name: 'Rogue', short_name: 'ROG', mask: 1 << 8 },
	{ id: 10, long_name: 'Shaman', short_name: 'SHM', mask: 1 << 9, spellListID: 6 },
	{ id: 11, long_name: 'Necromancer', short_name: 'NEC', mask: 1 << 10, spellListID: 3 },
	{ id: 12, long_name: 'Wizard', short_name: 'WIZ', mask: 1 << 11, spellListID: 2 },
	{ id: 13, long_name: 'Magician', short_name: 'MAG', mask: 1 << 12, spellListID: 4 },
	{ id: 14, long_name: 'Enchanter', short_name: 'ENC', mask: 1 << 13, spellListID: 5 },
	{ id: 15, long_name: 'Beastlord', short_name: 'BST', mask: 1 << 14, spellListID: 12 },
	{ id: 16, long_name: 'Berserker', short_name: 'BZK', mask: 1 << 15 }
];

export function getUseableClasses(search: number): PlayerClassType[] {
	return getFromMask<PlayerClassType>(search, playerClassList);
}

export function getIdForClass(name: string): number {
	let id = 0;
	playerClassList.forEach((playerClass) => {
		if (
			playerClass.long_name.toLowerCase() === name.toLowerCase() ||
			playerClass.short_name.toLowerCase() === name.toLowerCase()
		)
			id = playerClass.id;
	});

	return id;
}
