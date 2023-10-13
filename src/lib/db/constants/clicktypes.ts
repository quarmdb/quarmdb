import type { ItemsType } from '$lib/schema';
import { urlBlob } from '$lib/utils';
import type { ItemsCardType } from '../items';

export const clickTypes = [
	{ id: 0, type: 'None', short: 'none' },
	{ id: 1, type: 'Click from Inventory with Level requirement', short: 'Any' },
	{ id: 3, type: 'Expendable', short: 'Expendable' },
	{ id: 4, type: 'Must equip to click', short: 'Must Equip' },
	{
		id: 5,
		type: 'Click from inventory with Level / Class / Race requirements',
		short: 'Any'
	}
];

export const getClickTypeById = (id: number) => {
	let found = clickTypes.find((value) => {
		return value.id === id;
	});

	if (found === undefined) {
		found = clickTypes[0];
	}

	return found;
};
