import Database from 'better-sqlite3';
let options: Database.Options = { verbose: console.log, readonly: true };
const db = new Database('./db/quarm.sqlite3', options);
db.pragma('journal_mode = WAL');

import fs from 'fs';

function uppercaseFirst(str: string) {
	return str.at(0)?.toUpperCase() + str.slice(1);
}

function snakeToCamel(str: string) {
	str = uppercaseFirst(str);

	let newString = '';
	let pieces = str.split('_');
	for (let i = 0; i < pieces.length; i++) {
		newString += uppercaseFirst(pieces[i]);
	}
	return newString;
}

const res = db.prepare("SELECT name FROM sqlite_schema WHERE type='table' ORDER BY name").all() as {
	name: string;
}[];

const filePath = './src/lib/schema/';
fs.rmSync(filePath, { recursive: true, force: true });
fs.mkdirSync(filePath);

let newTypes = '';
let allTableNames: string[] = [];
for (let i = 0; i < res.length; i++) {
	let tblname = res[i].name;
	let stmt = `SELECT * from ${tblname}`;
	let tblSnake = snakeToCamel(tblname);

	allTableNames.push(tblSnake);

	const cols = db.prepare(stmt).columns();

	let zodfile = `import {z} from 'zod';\n`;
	zodfile += `export const ${tblSnake}Schema= z.object({\n`;

	cols.sort((a, b) => {
		if (a.name < b.name) return -1;
		else return 1;
	});

	cols.forEach((col) => {
		if (!col.type) return;
		let line = col.column + ': ';
		if (
			col.type?.startsWith('INTEGER') ||
			col.type?.startsWith('float') ||
			col.type === 'double' ||
			col.type?.includes('decimal')
		)
			line += 'z.number()';
		else if (
			col.type === 'TEXT' ||
			col.type === 'tinytext' ||
			col.type?.includes('blob') ||
			col.type?.includes('char') ||
			col.type?.includes('date') ||
			col.type?.includes('time')
		)
			line += `z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			})`;
		else newTypes += '|' + col.name + '|' + col.type + '|' + '\n';

		line += ',\n';
		zodfile += line;
	});
	zodfile += `});\n`;
	zodfile += `export type ${tblSnake}Type = z.infer<typeof ${tblSnake}Schema>;\n`;
	fs.writeFileSync(`${filePath}${tblSnake}.ts`, zodfile, {
		encoding: 'utf8',
		flag: 'w',
		mode: 0o666
	});
}

let idxFile = '';
allTableNames.forEach((tbl) => {
	idxFile += `import {${tbl}Schema} from './${tbl}';\n`;
	idxFile += `import type {${tbl}Type} from './${tbl}';\n`;
	idxFile += `export {${tbl}Schema};\n`;
	idxFile += `export type {${tbl}Type}\n`;
	idxFile += '\n';
});

fs.writeFileSync(`${filePath}index.ts`, idxFile);

console.log(newTypes);
