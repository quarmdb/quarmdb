//download latest dump
import https from 'https';
import fs, { readFileSync, readdir, readdirSync, writeFileSync } from 'fs';
import tar from 'tar';
//take mysql files and somehow convert them into postgres
import { convertFiles } from './convertQuarmMysql';

if (process.argv.length === 2) {
	console.error('Expected at least one argument!');
	process.exit(1);
}

let sendNetwork = false;
if (process.argv[2]) sendNetwork = process.argv[2] === 'true';

let locationQuarmDB =
	'https://raw.githubusercontent.com/SecretsOTheP/EQMacEmu/main/utils/sql/database_full/quarm_2023-09-18-21_05.tar.gz';

const mysqlFilePath = './db/mysql_files/';
const postgresFilePath = './db/postgres_files/';

let dbFileName = locationQuarmDB.split(/.*[\/|\\]/).at(-1);

async function downloadFile(url, targetFile) {
	return await new Promise((resolve, reject) => {
		https
			.get(url, (response) => {
				const code = response.statusCode ?? 0;

				if (code >= 400) {
					return reject(new Error(response.statusMessage));
				}

				// handle redirects
				if (code > 300 && code < 400 && !!response.headers.location) {
					return resolve(downloadFile(response.headers.location, targetFile));
				}

				// save the file to disk
				const fileWriter = fs.createWriteStream(targetFile).on('finish', () => {
					resolve({});
				});

				response.pipe(fileWriter);
			})
			.on('error', (error) => {
				reject(error);
			});
	});
}

//remove old files
fs.rmSync(mysqlFilePath, { recursive: true, force: true });
//fs.rmSync(postgresFilePath, { recursive: true, force: true });
fs.mkdirSync(mysqlFilePath);
//fs.mkdirSync(postgresFilePath);

await downloadFile(locationQuarmDB, mysqlFilePath + dbFileName);

//untar/gunzip the current
let dbFull = mysqlFilePath + dbFileName;
console.log(dbFull);
await tar.extract({
	file: mysqlFilePath + dbFileName,
	cwd: mysqlFilePath
});

let sqlFiles: string[] = [];
const files = readdirSync(mysqlFilePath);
files.forEach((fileName) => {
	if (fileName.endsWith('.sql')) {
		sqlFiles.push(readFileSync(mysqlFilePath + fileName, 'utf-8'));
	}
});

let sqlMap = convertFiles(sqlFiles);
console.log(`sqlMap.size = ${sqlMap.size}`);
const keys = sqlMap.keys();
let key = '';
for (let [key, value] of sqlMap) {
	//console.log(`Writing ${key}`);
	writeFileSync(postgresFilePath + key + '.sql', value.join('\n'));
}

if (!sendNetwork) process.exit(1);

console.log('before import');

import { exec, spawn } from 'child_process';
let sqls = '';

console.log('after import');

/**
readdir(postgresFilePath, (err, files) => {
	if (err) {
		console.log(err);
		return;
	}
	let count = 1;
	files.forEach(async (fileName, idx, array) => {
		if (fileName.endsWith('.sql')) {
			console.log('reading :', postgresFilePath + fileName);
			try {
				let sql = readFileSync(postgresFilePath + fileName, 'utf-8');
				let res: QueryResult = await db.query(sql);
				console.log(`${count} of ${array.length} - ${fileName} - ${res.command}`);
				count++;
			} catch (error) {
				console.error(error);
			} finally {
				console.log(`Done with ${fileName}`);
			}
		}
	});
});
*/

let count = 1;

let tableCountMap = new Map<string, boolean>();

//psql file
let psql = '';
for (let [key, value] of sqlMap) {
	psql += `-- ${key} Table\n`;
	psql += value.join('\n') + '\n';
}

writeFileSync(postgresFilePath + 'psql.sql', psql);

/*
let psqlCommand = `psql '${
	process.env.SECRET_POSTGRES_URL as string
}' -f ${postgresFilePath}psql.sql`;

const updateDb = spawn('psql', [
	process.env.SECRET_POSTGRES_URL as string,
	'-f ./db/postgres_files/psql.sql'
]);

updateDb.stdout.on('data', (data) => {
	console.log(`stdout: ${data}`);
});

updateDb.stderr.on('data', (data) => {
	console.log(`stderr: ${data}`);
});

updateDb.on('error', (error) => {
	console.log(`error: ${error.message}`);
});

updateDb.on('close', (code) => {
	console.log(`child process exited with code ${code}`);
});
*/
