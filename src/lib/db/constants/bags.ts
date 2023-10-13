import type { ItemsType } from '$lib/schema';
import { getItemTypeById, itemSizes } from './item';

export const getBagLine = (item: ItemsType) => {
	let bagLine = '';
	if (item.bagtype === 0) return bagLine;

	bagLine += `Bag: ${item.bagslots} slots (${itemSizes[item.bagsize].name})`;
	if (item.bagwr !== 0) bagLine += ` ${item.bagwr}% Reduction`;

	return bagLine;
};
