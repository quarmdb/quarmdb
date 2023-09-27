import type { Spawn2Type } from './schema';

export function sort_obj_keys(obj: { [key: string]: any }): Object {
	let allKeys = Object.keys(obj);
	allKeys.sort();
	let temp_obj: { [key: string]: any } = {};
	for (let i = 0; i < allKeys.length; i++) {
		temp_obj[allKeys[i]] = obj[allKeys[i]];
	}
	return temp_obj;
}

export const debounce = (fn: Function, ms = 300) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};

export function nameParse(name: string): string {
	let pieces = name.replace(/_/gi, ' ').split(' ');
	for (let i = 0; i < pieces.length; i++)
		pieces[i] = pieces[i].at(0)?.toUpperCase() + pieces[i].slice(1);
	return pieces.join(' ');
}

export function groupSpawnTable(spawns: Spawn2Type[]): Map<string, Spawn2Type[]> {
	const spawnMap = new Map<string, Spawn2Type[]>();

	spawns.forEach((spawn) => {
		let temps = spawnMap.get(spawn.zone) || [];
		temps.push(spawn);
		spawnMap.set(spawn.zone, temps);
	});

	return spawnMap;
}
