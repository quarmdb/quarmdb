import type Item from '$lib/components/Item.svelte';

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

export type PlayerRaceType = {
	id: number;
	mask: number;
	short_name: string;
	long_name: string;
};

export const playerRaceList: PlayerRaceType[] = [
	{ id: 1, long_name: 'Human', short_name: 'HUM', mask: 1 << 0 },
	{ id: 2, long_name: 'Barbarian', short_name: 'BAR', mask: 1 << 1 },
	{ id: 3, long_name: 'Erudite', short_name: 'ERU', mask: 1 << 2 },
	{ id: 4, long_name: 'Wood Elf', short_name: 'ELF', mask: 1 << 3 },
	{ id: 5, long_name: 'High Elf', short_name: 'HIE', mask: 1 << 4 },
	{ id: 6, long_name: 'Dark_Elf', short_name: 'DEF', mask: 1 << 5 },
	{ id: 7, long_name: 'Half Elf', short_name: 'HEF', mask: 1 << 6 },
	{ id: 8, long_name: 'Dwarf', short_name: 'DWF', mask: 1 << 7 },
	{ id: 9, long_name: 'Troll', short_name: 'TRL', mask: 1 << 8 },
	{ id: 10, long_name: 'Ogre', short_name: 'OGR', mask: 1 << 9 },
	{ id: 11, long_name: 'Halfling', short_name: 'HFL', mask: 1 << 10 },
	{ id: 12, long_name: 'Gnome', short_name: 'GNM', mask: 1 << 11 },
	{ id: 13, long_name: 'Iksar', short_name: 'IKS', mask: 1 << 12 },
	{ id: 14, long_name: 'Vah Shir', short_name: 'VAH', mask: 1 << 13 },
	{ id: 15, long_name: 'Froglok', short_name: 'VAH', mask: 1 << 14 },
	{ id: 16, long_name: 'Drakkin', short_name: 'VAH', mask: 1 << 15 }
];

export function getUseableRaces(search: number): PlayerRaceType[] {
	return getFromMask<PlayerRaceType>(search, playerRaceList);
}

const expansionLookup: Map<number, string> = new Map();
expansionLookup.set(1, 'Vanilla Everquest');
expansionLookup.set(2, 'Ruins of Kunark');
expansionLookup.set(3, 'Scars of Velious');
expansionLookup.set(4, 'The Shadows of Luclin');
expansionLookup.set(5, 'The Planes of Power');
expansionLookup.set(99, 'Special Zones');
export { expansionLookup };

export const itemSizes = [
	{ id: 0, name: 'TINY' },
	{ id: 1, name: 'SMALL' },
	{ id: 2, name: 'MEDIUM' },
	{ id: 3, name: 'LARGE' },
	{ id: 4, name: 'GIANT' }
];

export const skills: { id: number; name: string }[] = [
	{ id: 0, name: '1H Blunt' },
	{ id: 1, name: '1H Slashing' },
	{ id: 2, name: '2H Blunt' },
	{ id: 3, name: '2H Slashing' },
	{ id: 4, name: 'Abjuration' },
	{ id: 5, name: 'Alteration' },
	{ id: 6, name: 'Apply Poison' },
	{ id: 7, name: 'Archery' },
	{ id: 8, name: 'Backstab' },
	{ id: 9, name: 'Bind Wound' },
	{ id: 10, name: 'Bash' },
	{ id: 11, name: 'Block' },
	{ id: 12, name: 'Brass Instruments' },
	{ id: 13, name: 'Channeling' },
	{ id: 14, name: 'Conjuration' },
	{ id: 15, name: 'Defense' },
	{ id: 16, name: 'Disarm' },
	{ id: 17, name: 'Disarm Traps' },
	{ id: 18, name: 'Divination' },
	{ id: 19, name: 'Dodge' },
	{ id: 20, name: 'Double Attack' },
	{ id: 21, name: 'Dragon Punch' },
	{ id: 22, name: 'Dual Wield' },
	{ id: 23, name: 'Eagle Strike' },
	{ id: 24, name: 'Evocation' },
	{ id: 25, name: 'Feign Death' },
	{ id: 26, name: 'Flying Kick' },
	{ id: 27, name: 'Forage' },
	{ id: 28, name: 'Hand to Hand' },
	{ id: 29, name: 'Hide' },
	{ id: 30, name: 'Kick' },
	{ id: 31, name: 'Meditate' },
	{ id: 32, name: 'Mend' },
	{ id: 33, name: 'Offense' },
	{ id: 34, name: 'Parry' },
	{ id: 35, name: 'Pick Lock' },
	{ id: 36, name: 'Piercing' },
	{ id: 37, name: 'Riposte' },
	{ id: 38, name: 'Round Kick' },
	{ id: 39, name: 'Safe Fall' },
	{ id: 40, name: 'Sense Heading' },
	{ id: 41, name: 'Singing' },
	{ id: 42, name: 'Sneak' },
	{ id: 43, name: 'Specialize Abjure' },
	{ id: 44, name: 'Specialize Alteration' },
	{ id: 45, name: 'Specialize Conjuration' },
	{ id: 46, name: 'Specialize Divination' },
	{ id: 47, name: 'Specialize Evocation' },
	{ id: 48, name: 'Pick Pockets' },
	{ id: 49, name: 'Stringed Instruments' },
	{ id: 50, name: 'Swimming' },
	{ id: 51, name: 'Throwing' },
	{ id: 52, name: 'Tiger Claw' },
	{ id: 53, name: 'Tracking' },
	{ id: 54, name: 'Wind Instruments' },
	{ id: 55, name: 'Fishing' },
	{ id: 56, name: 'Make Poison' },
	{ id: 57, name: 'Tinkering' },
	{ id: 58, name: 'Research' },
	{ id: 59, name: 'Alchemy' },
	{ id: 60, name: 'Baking' },
	{ id: 61, name: 'Tailoring' },
	{ id: 62, name: 'Sense Traps' },
	{ id: 63, name: 'Blacksmithing' },
	{ id: 64, name: 'Fletching' },
	{ id: 65, name: 'Brewing' },
	{ id: 66, name: 'Alcohol Tolerance' },
	{ id: 67, name: 'Begging' },
	{ id: 68, name: 'Jewelry Making' },
	{ id: 69, name: 'Pottery' },
	{ id: 70, name: 'Percussion Instruments' },
	{ id: 71, name: 'Intimidation' },
	{ id: 72, name: 'Berserking' },
	{ id: 73, name: 'Taunt' }
];

export type ItemSlotType = {
	id: number;
	name: string;
	mask: number;
};

export const itemSlots = [
	{ id: 0, name: 'HELD', mask: 1 << 0 },
	{ id: 1, name: 'EAR', mask: 1 << 1 },
	{ id: 2, name: 'HEAD', mask: 1 << 2 },
	{ id: 3, name: 'FACE', mask: 1 << 3 },
	{ id: 4, name: 'EAR', mask: 1 << 4 },
	{ id: 5, name: 'NECK', mask: 1 << 5 },
	{ id: 6, name: 'SHOULDERS', mask: 1 << 6 },
	{ id: 7, name: 'ARMS', mask: 1 << 7 },
	{ id: 8, name: 'BACK', mask: 1 << 8 },
	{ id: 9, name: 'WRIST', mask: 1 << 9 },
	{ id: 10, name: 'WRIST', mask: 1 << 10 },
	{ id: 11, name: 'RANGE', mask: 1 << 11 },
	{ id: 12, name: 'HANDS', mask: 1 << 12 },
	{ id: 13, name: 'PRIMARY', mask: 1 << 13 },
	{ id: 14, name: 'SECONDARY', mask: 1 << 14 },
	{ id: 15, name: 'FINGERS', mask: 1 << 15 },
	{ id: 16, name: 'FINGERS', mask: 1 << 16 },
	{ id: 17, name: 'CHEST', mask: 1 << 17 },
	{ id: 18, name: 'LEGS', mask: 1 << 18 },
	{ id: 19, name: 'FEET', mask: 1 << 19 },
	{ id: 20, name: 'WAIST', mask: 1 << 20 },
	{ id: 21, name: 'AMMO', mask: 1 << 21 }
];

export function getUseableSlots(search: number): ItemSlotType[] {
	return getFromMask<ItemSlotType>(search, itemSlots);
}

export type DietyType = {
	id: number;
	name: string;
	mask: number;
};

export const dieties = [
	{ id: 0, name: 'Agnostic', mask: 1 << 0 },
	{ id: 1, name: 'Bertoxxulous', mask: 1 << 1 },
	{ id: 2, name: 'Brell Serilis', mask: 1 << 2 },
	{ id: 3, name: 'Cazic Thule', mask: 1 << 3 },
	{ id: 4, name: 'Erollisi Marr', mask: 1 << 4 },
	{ id: 5, name: 'Bristlebane', mask: 1 << 5 },
	{ id: 6, name: 'Innoruuk', mask: 1 << 6 },
	{ id: 7, name: 'Karana', mask: 1 << 7 },
	{ id: 8, name: 'Mithaniel Marr', mask: 1 << 8 },
	{ id: 9, name: 'Prexus', mask: 1 << 9 },
	{ id: 10, name: 'Quellious', mask: 1 << 10 },
	{ id: 11, name: 'Rallos Zek', mask: 1 << 11 },
	{ id: 12, name: 'Rodcet Nife', mask: 1 << 12 },
	{ id: 13, name: 'Solusek Ro', mask: 1 << 13 },
	{ id: 14, name: 'The Tribunal', mask: 1 << 14 },
	{ id: 15, name: 'Tunare', mask: 1 << 15 },
	{ id: 16, name: 'Veeshan', mask: 1 << 16 }
];

export function getDieties(search: number): DietyType[] {
	return getFromMask<DietyType>(search, dieties);
}

export const ItemTypes = [
	{ id: 0, name: '1H Slashing' },
	{ id: 1, name: '2H Slashing' },
	{ id: 2, name: '1H Piercing' },
	{ id: 3, name: '1H Blunt' },
	{ id: 4, name: '2H Blunt' },
	{ id: 5, name: 'Archery' },
	{ id: 7, name: 'Throwing' },
	{ id: 8, name: 'Shield' },
	{ id: 10, name: 'Armor' },
	{ id: 11, name: 'Tradeskill Items' },
	{ id: 12, name: 'Lockpicking' },
	{ id: 14, name: 'Food' },
	{ id: 15, name: 'Drink' },
	{ id: 16, name: 'Light Source' },
	{ id: 17, name: 'Common Inventory Item' },
	{ id: 18, name: 'Bind Wound' },
	{ id: 19, name: 'Thrown Casting Items' },
	{ id: 20, name: 'Spells' },
	{ id: 21, name: 'Potions' },
	{ id: 22, name: 'Fletched Arrows' },
	{ id: 23, name: 'Wind Instruments' },
	{ id: 24, name: 'Stringed Instruments' },
	{ id: 25, name: 'Brass Instruments' },
	{ id: 26, name: 'Percussion Instruments' },
	{ id: 27, name: 'Ammo' },
	{ id: 29, name: 'Jewelry' },
	{ id: 31, name: 'Readable Notes and Scrolls' },
	{ id: 32, name: 'Readable Books' },
	{ id: 33, name: 'Keys' },
	{ id: 34, name: 'Odd Items' },
	{ id: 35, name: '2H Piercing' },
	{ id: 36, name: 'Fishing Poles' },
	{ id: 37, name: 'Fishing Bait' },
	{ id: 38, name: 'Alcoholic Beverages' },
	{ id: 39, name: 'More Keys' },
	{ id: 40, name: 'Compasses' },
	{ id: 42, name: 'Poisons' },
	{ id: 45, name: 'Hand to Hand' },
	{ id: 52, name: 'Charms' },
	{ id: 53, name: 'Dyes' },
	{ id: 54, name: 'Augments' },
	{ id: 55, name: 'Augment Solvents' },
	{ id: 56, name: 'Augment Distillers' },
	{ id: 58, name: 'Fellowship Banner Materials' },
	{ id: 60, name: 'Cultural Armor Manuals' },
	{ id: 63, name: 'New Curencies like Orum' }
];

export const getItemIdByName = (name: string) => {
	let item = ItemTypes.find((value) => value.name.toLowerCase() === name.toLowerCase());
	if (item === undefined) return 0;
	return item.id;
};

export const getItemTypeById = (id: number) => {
	let item = ItemTypes.find((value) => id === value.id);
	if (item === undefined) return { id: -1, name: 'undefined' };
	return item;
};
