function convert(lines: string[]): string {
	let postgres = '';

	let currentTable = '';
	let skip = [/^CREATE DATABASE/i, /^USE/i, /^\/\*/i, /^--/i];
	let keys: string[] = [];

	// Used this site to test regexes: https://regex101.com/
	let allTables: string[] = [];

	lineLoop: for (var i = 0; i < lines.length; i++) {
		let line = lines[i].trim();

		//get rid of `'s
		line = line.replace(/\`/gi, '');

		let m: RegExpExecArray | null = null;
		// Skip lines that match regexes in the skip[] array above
		for (var j = 0; j < skip.length; j++) if (skip[j].test(line)) continue lineLoop;
		// Include all `INSERT` lines. Replace \' by ''
		if (/^(INSERT|\()/i.test(line)) {
			postgres += line.replace(/\\\'/gi, `''`).replace(/(?<!\));/gi, `.`);
			continue;
		}
		// Print the ´CREATE´ line as is and capture the table name
		if ((m = /CREATE TABLE ([a-zA-Z_]+) \(/gi.exec(line)) !== null) {
			currentTable = m[1];
			//console.log('CREATE TABLE ' + currentTable);
			allTables.push(currentTable);
			postgres += `\nDROP TABLE IF EXISTS ${currentTable} CASCADE;`;
			postgres += '\n' + line + '\n';
			continue;
		}
		// Clean table end line like:
		// ) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COMMENT='By definition:\r\n- user_group #1 is administrator and will always have all permissions.\r\n- user_group #2 is guest and always have no permissions.\r\n';
		if (line.startsWith(')')) {
			postgres += ');\n';
			//console.log('end of command');
			//find previous line that has sql
			if (postgres.slice(-10).indexOf('),') >= 0) {
				let lastTen = postgres.slice(-10);
				lastTen = lastTen.replace('),', ')').replace('\n,\n', '\n');
				postgres = postgres.slice(0, -10) + lastTen;
			}
			continue;
		}

		//Auto increment lines => Serial
		line = line.replace(/[a-zA-Z]+int\([0-9]+\)[ a-zA-Z]+AUTO_INCREMENT/gi, 'BIGSERIAL');

		//Change timestamp stuff
		line = line.replace(/timestamp/gi, 'time');
		line = line.replace(/datetime/gi, 'timestamp');
		line = line.replace(/current_time()/gi, 'CURRENT_TIMESTAMP');

		//just need the default to be something stupid
		line = line.replace(/\'0000-00-00 00:00:00\'/gi, 'CURRENT_TIMESTAMP');
		line = line.replace(/"0000-00-00 00:00:00"/gi, 'CURRENT_TIMESTAMP');

		//clean up primary key
		if ((m = /\s*PRIMARY\s*KEY\s*\(((\w+|,\w+)+)\)/gi.exec(line)) !== null) {
			let constraint_name = m[1].replace(/,/gi, '_');
			line = 'CONSTRAINT ' + currentTable + '_' + constraint_name + ' PRIMARY KEY (' + m[1] + '),';
		}

		//Unique key
		if ((m = /\s*UNIQUE KEY\s*\w+\s*(\([a-zA-Z_,]+\))/gi.exec(line)) !== null) {
			line = 'UNIQUE ' + m[1] + ',';
		}

		//type convert
		line = line.replace(/ float\(/gi, ' NUMERIC(');
		line = line.replace(/ tinytext /gi, ' TEXT ');
		line = line.replace(/ double /gi, ' DOUBLE PRECISION ');
		line = line.replace(/ mediumblob /gi, ' TEXT ');

		//clean up some reserved words used in tables
		//words not reserved in mysql but are in postgres
		if (
			(m = /([a-zA-Z_]+) (BIGINT|TEXT|INTEGER|DOUBLE PRECISION|VARCHAR\(\w+\))/gi.exec(line)) !==
			null
		) {
			if (['from', 'end', 'desc', 'type', 'to'].indexOf(m[1]) >= 0) {
				line = line.replace(m[1], `"${m[1]}"`);
			}
		}

		// Lines starting with (UNIQUE) KEY are extracted so we declare them all at the end of the script
		// We also append key name with table name to avoid duplicate index name
		// Example: KEY `name` (`permission_name`)
		if ((m = /^(UNIQUE\s)*KEY\s+[`'"](\w+)[`'"]\s+\([`'"](\w+)[`'"]/gi.exec(line)) !== null) {
			let keyUnique = m[1] || '';
			let keyName = m[2];
			let colName = m[3];
			keys.push(
				'CREATE ' +
					keyUnique +
					'INDEX ' +
					currentTable +
					'_' +
					keyName +
					' ON ' +
					currentTable +
					' (' +
					colName +
					');'
			);
			continue;
		}

		line = line.replace(/^KEY [a-zA-Z0-9_]+\s*\([a-zA-Z0-9,_]+\)/gi, '');

		// USING BTREE
		line = line.replace(/USING [a-zA-Z0-9]+/gi, '');

		// Print all fields definition lines except "KEY" lines and lines starting with ")"
		if (/^[^)]((?![\w]+\sKEY).)*$/gi.test(line)) {
			// Clear invalid keywords
			line = line.replace(/AUTO_INCREMENT|CHARACTER SET [^ ]+|CHARACTER SET [^ ]+|UNSIGNED/gi, '');
			line = line.replace(
				/DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP|COLLATE [^ ]+/gi,
				''
			);
			// On Update doesnt work with SQLITE
			line = line.replace(/ON UPDATE current_timestamp\(\)/gi, '');
			line = line.replace(/current_timestamp\(\)/gi, 'CURRENT_TIMESTAMP');
			line = line.replace(/COMMENT\s['"`].*['"`]/gi, '');
			line = line.replace(/SET\([^)]+\)|ENUM[^)]+\)/gi, 'TEXT ');

			line = line.replace(/ char\(/gi, ' varchar(');
			// Clear weird MySQL types such as varchar(40) and int(11)
			line = line.replace(/[a-zA-Z]*int\([0-9]*\)/gi, 'BIGINT');
			line = line.replace(/ZEROFILL/gi, '');
			//line = line.replace(/varchar\([0-9]*\)|LONGTEXT/gi, 'TEXT');
		}

		if (line != '') {
			postgres += line + '\n';
		}
	}
	postgres += '\n';

	// Fix last table line with comma
	postgres = postgres.replace(/,\n\);/g, '\n);');

	// Include all gathered keys as CREATE INDEX
	postgres += '\n\n' + keys.join('\n') + '\n\n';

	return postgres;
}

export function convertFile(file: string) {
	let lines = file.split('\n');
	return convert(lines);
}
