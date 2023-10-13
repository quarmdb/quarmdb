import type { ItemsType } from '$lib/schema';
import { getFromMask } from '.';

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
	let item = ItemTypes.find(
		(value) => value.type.toLowerCase() === type.toLowerCase()
	);
	if (item === undefined) return 0;
	return item.id;
};

export const getItemTypeById = (id: number) => {
	let item = ItemTypes.find((value) => id === value.id);
	if (item === undefined) return { id: -1, type: 'undefined' };
	return item;
};

export type ItemSlotType = {
	id: number;
	name: string;
	mask: number;
};

export const ItemSlots = [
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
	return getFromMask<ItemSlotType>(search, ItemSlots);
}

export const getSlotList = (slotMask: number): string => {
	return getUseableSlots(slotMask)
		.reduce<string[]>((acc, value, idx) => {
			acc.push(value.name);
			return acc;
		}, [])
		.join(' ');
};

export const getBardLine = (item: ItemsType) => {
	if (item.bardtype === 0) return '';
	return `Bard Skill: ${getItemTypeById(item.bardtype).type} (${
		(item.bardvalue - 10) * 10
	}%)`;
};

export const getStatsLine = (item: ItemsType) => {
	let stats = '';
	if (item.astr !== 0) stats += `STR: ${item.astr} `;
	if (item.adex !== 0) stats += `DEX: ${item.adex} `;
	if (item.asta !== 0) stats += `STA: ${item.asta} `;
	if (item.aint !== 0) stats += `INT: ${item.aint} `;
	if (item.aagi !== 0) stats += `AGI: ${item.aagi} `;
	if (item.awis !== 0) stats += `WIS: ${item.awis} `;
	return stats;
};

export const getResistsLine = (item: ItemsType) => {
	let resist = '';
	if (item.mr !== 0) resist += `MR: ${item.mr} `;
	if (item.cr !== 0) resist += `CR: ${item.cr} `;
	if (item.pr !== 0) resist += `PR: ${item.pr} `;
	if (item.fr !== 0) resist += `FR: ${item.fr} `;
	if (item.dr !== 0) resist += `DR: ${item.dr} `;
	return resist;
};
