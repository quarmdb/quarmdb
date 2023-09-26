function convert(lines: string[]): string {
	let sqlite =
		'-- HEAVILY BORROWED FROM https://github.com/ww9/mysql2sqlite \n' +
		'PRAGMA journal_mode = MEMORY;\n' +
		'PRAGMA synchronous = OFF;\n' +
		'PRAGMA foreign_keys = OFF;\n' +
		'PRAGMA ignore_check_constraints = OFF;\n' +
		'PRAGMA auto_vacuum = NONE;\n' +
		'PRAGMA secure_delete = OFF;\n' +
		'BEGIN TRANSACTION;\n';

	let currentTable = '';
	let skip = [/^CREATE DATABASE/i, /^USE/i, /^\/\*/i, /^--/i];
	let keys: string[] = [];

	// Used this site to test regexes: https://regex101.com/

	lineLoop: for (var i = 0; i < lines.length; i++) {
		let line = lines[i].trim();
		let m: RegExpExecArray | null = null;
		// Skip lines that match regexes in the skip[] array above
		for (var j = 0; j < skip.length; j++) if (skip[j].test(line)) continue lineLoop;
		// Include all `INSERT` lines. Replace \' by ''
		if (/^(INSERT|\()/i.test(line)) {
			sqlite += line.replace(/\\'/gi, "''") + '\n';
			continue;
		}
		// Print the ´CREATE´ line as is and capture the table name
		if ((m = /^\s*CREATE TABLE.*[`"](.*)[`"]/i.exec(line)) !== null) {
			currentTable = m[1];
			sqlite += '\n' + line + '\n';
			continue;
		}
		// Clean table end line like:
		// ) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COMMENT='By definition:\r\n- user_group #1 is administrator and will always have all permissions.\r\n- user_group #2 is guest and always have no permissions.\r\n';
		if (line.startsWith(')')) {
			sqlite += ');\n';
			continue;
		}
		// Remove CONSTRAINT `fk_address_state1`" part from lines
		line = line.replace(/^CONSTRAINT [`'"][\w]+[`'"][\s]+/gi, '');
		// Replace "XXXXX KEY" by "KEY" except "PRIMARY KEY" "FOREIGN KEY" and "UNIQUE KEY"
		line = line.replace(/^[^FOREIGN][^PRIMARY][^UNIQUE]\w+\s+KEY/gi, 'KEY');

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
					'INDEX `' +
					currentTable +
					'_' +
					keyName +
					'` ON `' +
					currentTable +
					'` (`' +
					colName +
					'`);'
			);
			continue;
		}

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
			// Clear weird MySQL types such as varchar(40) and int(11)
			line = line.replace(/[a-zA-Z]*int\([0-9]*\)/gi, 'INTEGER');
			line = line.replace(/varchar\([0-9]*\)|LONGTEXT/gi, 'TEXT');
		}

		if (line != '') {
			sqlite += line + '\n';
		}
	}
	sqlite += '\n';

	// Fix last table line with comma
	sqlite = sqlite.replace(/,\n\);/g, '\n);');

	// Include all gathered keys as CREATE INDEX
	sqlite += '\n\n' + keys.join('\n') + '\n\n';

	// Re-enable foreign key check
	sqlite +=
		'COMMIT;\n' +
		'PRAGMA ignore_check_constraints = ON;\n' +
		'PRAGMA foreign_keys = ON;\n' +
		'PRAGMA journal_mode = WAL;\n' +
		'PRAGMA synchronous = NORMAL;\n';

	return sqlite;
}

export function convertFile(file: string) {
	let lines = file.split('\n');
	return convert(lines);
}
