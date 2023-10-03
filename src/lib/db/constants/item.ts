export const itemSizes = [
	{ id: 0, name: 'TINY' },
	{ id: 1, name: 'SMALL' },
	{ id: 2, name: 'MEDIUM' },
	{ id: 3, name: 'LARGE' },
	{ id: 4, name: 'GIANT' }
];

export const ItemTypes: { id: number; type: string }[] = [
	{ id: 0, type: '1H Slashing' },
	{ id: 1, type: '2H Slashing' },
	{ id: 2, type: '1H Piercing' },
	{ id: 3, type: '1H Blunt' },
	{ id: 4, type: '2H Blunt' },
	{ id: 5, type: 'Archery' },
	{ id: 7, type: 'Throwing' },
	{ id: 8, type: 'Shield' },
	{ id: 10, type: 'Armor' },
	{ id: 11, type: 'Tradeskill Items' },
	{ id: 12, type: 'Lockpicking' },
	{ id: 14, type: 'Food' },
	{ id: 15, type: 'Drink' },
	{ id: 16, type: 'Light Source' },
	{ id: 17, type: 'Common Inventory Item' },
	{ id: 18, type: 'Bind Wound' },
	{ id: 19, type: 'Thrown Casting Items' },
	{ id: 20, type: 'Spells' },
	{ id: 21, type: 'Potions' },
	{ id: 22, type: 'Fletched Arrows' },
	{ id: 23, type: 'Wind Instruments' },
	{ id: 24, type: 'Stringed Instruments' },
	{ id: 25, type: 'Brass Instruments' },
	{ id: 26, type: 'Percussion Instruments' },
	{ id: 27, type: 'Ammo' },
	{ id: 29, type: 'Jewelry' },
	{ id: 31, type: 'Readable Notes and Scrolls' },
	{ id: 32, type: 'Readable Books' },
	{ id: 33, type: 'Keys' },
	{ id: 34, type: 'Odd Items' },
	{ id: 35, type: '2H Piercing' },
	{ id: 36, type: 'Fishing Poles' },
	{ id: 37, type: 'Fishing Bait' },
	{ id: 38, type: 'Alcoholic Beverages' },
	{ id: 39, type: 'More Keys' },
	{ id: 40, type: 'Compasses' },
	{ id: 42, type: 'Poisons' },
	{ id: 45, type: 'Hand to Hand' },
	{ id: 52, type: 'Charms' },
	{ id: 53, type: 'Dyes' },
	{ id: 54, type: 'Augments' },
	{ id: 55, type: 'Augment Solvents' },
	{ id: 56, type: 'Augment Distillers' },
	{ id: 58, type: 'Fellowship Banner Materials' },
	{ id: 60, type: 'Cultural Armor Manuals' },
	{ id: 63, type: 'New Curencies like Orum' }
];

export const getItemIdByType = (type: string) => {
	let item = ItemTypes.find((value) => value.type.toLowerCase() === type.toLowerCase());
	if (item === undefined) return 0;
	return item.id;
};

export const getItemTypeById = (id: number) => {
	let item = ItemTypes.find((value) => id === value.id);
	if (item === undefined) return { id: -1, type: 'undefined' };
	return item;
};
