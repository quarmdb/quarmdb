import type { QueryResult } from 'pg';
import type { Spawn2Type } from './schema';
import type { ZodSchema, z } from 'zod';
import { error } from '@sveltejs/kit';

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

/**
 * This database puts names in here that are version of "___" and "##A_Stupid_Beast"
 * This is to clean it up
 * @param name
 * @returns
 */
export function nameParse(name: string): string {
	let pieces = name.replace(/_/gi, ' ').split(' ');
	for (let i = 0; i < pieces.length; i++)
		pieces[i] = pieces[i].at(0)?.toUpperCase() + pieces[i].slice(1);
	name = pieces.join(' ');
	while (name.at(0) === '#') name = name.slice(1);
	return name;
}

export function groupSpawnTable(
	spawns: Spawn2Type[]
): Map<string, Spawn2Type[]> {
	const spawnMap = new Map<string, Spawn2Type[]>();

	spawns.forEach((spawn) => {
		let temps = spawnMap.get(spawn.zone) || [];
		temps.push(spawn);
		spawnMap.set(spawn.zone, temps);
	});

	return spawnMap;
}

export function parseDatabaseResponse<T extends ZodSchema>(
	res: QueryResult<any>,
	schema: T
): z.infer<typeof schema> {
	if (res.rowCount === 0) {
		console.error(`Row Count === 0 on ${res.command}`);
		throw error(404);
	}

	const parsedRes = schema.safeParse(res.rows);
	if (!parsedRes.success) {
		console.error(parsedRes.error);
		throw error(404);
	}

	return parsedRes.data;
}

export function removeLeadingA(str: string) {
	if (str.match(/^a /gi) || str.match(/^a_/gi)) return str.slice(2);
	if (str.match(/^an /gi) || str.match(/^an_/gi)) return str.slice(3);
	return str;
}

export function nameCompare(a: string, b: string) {
	return removeLeadingA(nameParse(a)).localeCompare(
		removeLeadingA(nameParse(b))
	);
}

export const omitFalsy = <T extends object>(
	obj: T
): {
	[P in Exclude<
		keyof T,
		{
			[Q in keyof T]: T[Q] extends 0 | '' | null ? Q : never;
		}[keyof T]
	>]: T[P];
} =>
	Object.fromEntries(
		Object.entries(obj).filter(([_, v]) => v !== 0 && v !== '' && v !== null)
	) as any;

export const urlBlob = (str: string) => {
	return str
		.replace(/\s+/gi, '-')
		.replace(/_/gi, '-')
		.replace(/#/gi, '')
		.toLowerCase();
};

export const getRandomInt = (max: number) => {
	return Math.floor(Math.random() * max);
};

export const coinSplit = (coin: number) => {
	let plat = Math.floor(coin / 1000);
	coin -= plat * 1000;
	let gold = Math.floor(coin / 100);
	coin -= gold * 100;
	let silver = Math.floor(coin / 10);
	coin -= silver * 10;
	let copper = coin;

	return {
		plat,
		gold,
		silver,
		copper
	};
};

export const coinString = (coin: number) => {
	const coinObj = coinSplit(coin);
	let str: string[] = [];
	if (coinObj.plat !== 0) str.push(`${coinObj.plat}pp`);
	if (coinObj.gold !== 0) str.push(`${coinObj.gold}gp`);
	if (coinObj.silver !== 0) str.push(`${coinObj.silver}sp`);
	if (coinObj.copper !== 0) str.push(`${coinObj.copper}cp`);
	return str.join(', ');
};
