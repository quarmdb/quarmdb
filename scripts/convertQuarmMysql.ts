import { c } from 'tar';

export function convertFiles(files: string[]) {
	console.log(`convertFiles() => files = ${files.length}`);
	let sqlMap = new Map<string, string[]>();
	for (let i = 0; i < files.length; i++)
		for (let [key, value] of convertFile(files[i])) sqlMap.set(key, value);

	return sqlMap;
}

export function convertFile(file: string) {
	//Turn all ` into nothing.
	file = file.replace(/`/gi, '');

	//remove all mysql comments/command things
	file = file.replace(/\/\*![0-9a-zA-Z_=@ ]+\*\/;\n/gi, '');

	//clean up the end create table things like
	//) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
	file = file.replace(/\)[a-zA-Z0-9= _]+;/gi, ');');

	//Change timestamp stuff
	file = file.replace(/timestamp/gi, 'time');
	file = file.replace(/datetime/gi, 'timestamp');
	file = file.replace(/current_time\(\)/gi, 'CURRENT_TIMESTAMP');

	let sqlMap: Map<string, string[]> = stepCommands(file);

	return sqlMap;
}

function stepCommands(file: string): Map<string, string[]> {
	let sqlLines: string[] = file.split(/;\n/gi);
	//keep each line of SQL as complete as possible
	for (let i = 0; i < sqlLines.length; i++) sqlLines[i] += ';\n';

	let currentTable = '';

	const sqlMap = new Map<string, string[]>();
	let m: RegExpExecArray | null = null;

	for (let i = 0; i < sqlLines.length; i++) {
		if ((m = /(CREATE TABLE) ([a-zA-Z0-9_]+)/gi.exec(sqlLines[i])) !== null) {
			//create stuff
			sqlLines[i] = convertCreate(sqlLines[i]);
		} else if ((m = /(INSERT INTO) ([a-zA-Z0-9_]+) VALUES/gi.exec(sqlLines[i])) !== null) {
			//insert stuff
			sqlLines[i] = convertInsert(sqlLines[i]);
		}
		if (m) {
			//console.log(`${m[1]} - ${m[2]}`);
			let linesToPush: string[] = sqlMap.get(m[2]) || [];
			linesToPush.push(sqlLines[i]);
			sqlMap.set(m[2], linesToPush);
		}
		m = null;
	}

	//console.log(`Map size: ${sqlMap.size}`);
	return sqlMap;
}

function convertInsert(sqlLine: string): string {
	// \' => ''
	sqlLine = sqlLine.replace(/\\\'/gi, "''");

	sqlLine = convertInsertByLine(sqlLine);

	return sqlLine;
}

function convertInsertByLine(sqlLine: string): string {
	let lines = sqlLine.split(/\n/);
	let m: RegExpExecArray | null = null;

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];

		//000000 datetime fix
		line = line.replace(/\'0000-00-00 00:00:00\'/gi, 'NOW()');

		lines[i] = line;
	}
	return lines.join('\n');
}

function convertCreate(sqlLine: string): string {
	let m: RegExpExecArray | null = null;
	let currentTable = '';
	if ((m = /(CREATE TABLE) ([a-zA-Z0-9_]+)/gi.exec(sqlLine)) !== null) {
		sqlLine = `DROP TABLE IF EXISTS ${m[2]} CASCADE;\n` + sqlLine;
		currentTable = m[2];
	}

	sqlLine = sqlLine.replace(/unsigned/gi, '');

	//PRIMARY KEY (x,y,z) => CONSTRAINT tbl_x_y_z PRIMARY KEY (x,y,z)
	if ((m = /PRIMARY KEY \(([a-zA-Z0-9_,]+)\)[ ,a-zA-Z]*\n/gi.exec(sqlLine)) !== null) {
		let constraint_name = m[1].replace(/,/gi, '_');
		//console.log(`${currentTable} - PRIMARY KEY ${m[1]}`);
		let constraint =
			'CONSTRAINT ' + currentTable + '_' + constraint_name + ' PRIMARY KEY (' + m[1] + '),';
		//console.log(`${constraint}`);
		sqlLine = sqlLine.replace(/PRIMARY KEY \(([a-zA-Z0-9_,]+)\)[ ,a-zA-Z]*\n/gi, constraint + '\n');
	}

	sqlLine = convertCreateByLine(sqlLine);

	//clean up file turn double spaces into single spaces
	sqlLine = sqlLine.replace(/  /gi, ' ');

	//get rid of the comma on the last line for closing
	sqlLine = sqlLine.replace(/,\s+\);/gim, '\n);');

	sqlLine = sqlLine.replace(/\n\n/gi, '\n');
	return sqlLine;
}

function convertCreateByLine(sqlLine: string): string {
	let lines = sqlLine.split(/\n/);
	let m: RegExpExecArray | null = null;

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];

		//000000 datetime fix
		line = line.replace(/DEFAULT \'0000-00-00 00:00:00\'/gi, 'DEFAULT CURRENT_TIMESTAMP');

		//comments in mysql
		if ((m = /( COMMENT \'.*\',)/gi.exec(line)) !== null) {
			line = line.replace(m[1], `, --${m[1]}`);
		}

		//UNIQUE KEY name (x,y,z) => UNIQUE (x,y,z)
		if ((m = /UNIQUE KEY [a-zA-Z0-9_]+ (\([a-zA-Z0-9_,]+\))/gi.exec(line)) !== null) {
			line = ' UNIQUE ' + m[1] + ',\n';
		}

		if (line.trim().startsWith('KEY')) line = '';
		//KEY x (x) USING BTREE => NOTHING
		//line = line.replace(/ KEY [a-zA-Z0-9_]+ \([a-zA-Z0-9_,]+\) [a-zA-Z ]+/gi, '\n');
		//line = line.replace(/\n KEY [a-zA-Z0-9_]+ \([a-zA-Z0-9_,]+\)/gi, '');

		//ON UPDATES ARE HARD FOR POSTGRES
		line = line.replace(/ ON UPDATE [a-zA-Z0-9_]+[,]?/gi, ',\n');

		//Convert types
		//Order matters for *ints -> INTEGER -> BIGSERIAL on Autoincrements
		line = line.replace(/ float\(/gi, ' NUMERIC(');
		line = line.replace(/ float /gi, ' NUMERIC ');
		line = line.replace(/ tinytext /gi, ' TEXT ');
		line = line.replace(/ [a-zA-Z]*int\(\d+\)/gi, ' BIGINT');
		line = line.replace(/ double /gi, ' DOUBLE PRECISION ');
		line = line.replace(/ mediumblob /gi, ' TEXT ');

		line = line.replace(/ zerofill /gi, ' ');
		//Serials are postgres' autoincrements
		line = line.replace(/BIGINT\s+[ a-zA-Z]+AUTO_INCREMENT/gi, 'BIGSERIAL');

		//clean up some reserved words used in tables
		//words not reserved in mysql but are in postgres
		let reservedWords = ['from', 'end', 'desc', 'type', 'to', 'group', 'time'];
		if ((m = /([a-zA-Z0-9_]+)(?= INTEGER| varchar| DOUBLE| BIGINT| TEXT)/gi.exec(line)) !== null) {
			if (reservedWords.indexOf(m[1]) >= 0) {
				line = line.replace(m[1], `"${m[1]}"`);
			}
		}

		lines[i] = line;
	}

	return lines.join('\n');
}
