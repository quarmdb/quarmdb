import Database from 'better-sqlite3';
let options: Database.Options = { verbose: console.log, readonly: true };
let db;
try {
	db = new Database('./db/quarm.sqlite3', options);
	db.pragma('journal_mode = WAL');
} catch (e) {
	console.error(e);
}

export { db };
