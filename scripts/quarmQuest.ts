import dotenv from 'dotenv';
import fs, { readdir, readdirSync } from 'fs';
import tar from 'tar';
import https from 'https';
dotenv.config();
let questPath = './quests/';

/*
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

const githubToken = process.env.SECRET_GITHUB_TOKEN as string;

const response = await fetch(
	'https://api.github.com/repos/SecretsOTheP/quests/tarball/',
	{
		method: 'GET',
		headers: {
			Authorization: `Bearer ${githubToken}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	}
);

const filename = response.headers
	.get('content-disposition')
	?.split('filename=')[1];
  
fs.rmSync(path, { recursive: true, force: true });
//fs.rmSync(postgresFilePath, { recursive: true, force: true });
fs.mkdirSync(path);

await downloadFile(response.url, `./quests/${filename}`);
let fullQuestTar = path + filename;
console.log(fullQuestTar);
await tar.extract({
	file: fullQuestTar,
	cwd: path
});
*/
let dir = readdirSync(questPath, {
	withFileTypes: true
});

dir.forEach((item) => {
	if (item.isDirectory()) questPath += item.name + '/';
});

console.log(`path = ${questPath}`);

const zoneToNpcMap: Map<string, string[]> = new Map();

let questDir = readdirSync(questPath, {
	withFileTypes: true
});

questDir.forEach((zone) => {
	if (zone.isDirectory()) {
		let zonePath = questPath + zone.name + '/';
		console.log(zonePath);
		let zoneDir = readdirSync(zonePath, {
			withFileTypes: true
		});
		let npcs: string[] = [];
		zoneDir.forEach((zoneFile) => {
			if (zoneFile.isFile()) npcs.push(zoneFile.name);
		});
		zoneToNpcMap.set(zone.name, npcs);
	}
});

for (const [key, value] of zoneToNpcMap) {
	console.log(`${key} has quests with ${value}`);
}
