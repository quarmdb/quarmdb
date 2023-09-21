import { readFile, writeFile } from 'fs/promises';
import { convertFile } from './conversion';
import { fstat, readFileSync, readdir } from 'fs';

if (process.argv.length === 2) {
	console.error('Expected at least one argument!');
	process.exit(1);
}

const fileDir = process.argv[2];
const outputFile = process.argv[3];

readdir(fileDir, (err, files) => {
	if (err) {
		console.log(err);
		return;
	}

	let convertedSql = '';

	files.forEach((fileName) => {
		if (fileName.endsWith('.sql')) {
			console.log('reading :', fileDir + fileName);
			convertedSql += convertFile(readFileSync(fileDir + fileName, 'utf-8'));
		}
	});

	writeFile(outputFile, convertedSql, 'utf-8');
});
