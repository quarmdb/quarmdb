import dotenv from 'dotenv';
import { Pool, Client, type PoolClient } from 'pg';

dotenv.config();

let poolCount = 0;

const pool = new Pool({
	connectionString: process.env.SECRET_POSTGRES_URL as string,
	connectionTimeoutMillis: 10000,
	max: 1,
	allowExitOnIdle: true
});

pool.on('connect', (client) => {
	client.query('SET DATESTYLE = iso, mdy');
});

pool.on('error', (err, client) => {
	console.error(err);
});

pool.on('acquire', (client) => {
	// console.log('Aquire ' + ++poolCount);
	// timeoutMap.set(
	// 	client,
	// 	setTimeout(() => {
	// 		console.error('client was not returned within 5 seconds', client);
	// 		process.exit(-1); // do whatever you need to do here to trip alarms
	// 	}, 5000)
	// );
});

pool.on('release', (error, client) => {
	// console.log(`Release ${--poolCount}`);
	// clearTimeout(timeoutMap.get(client));
});

export { pool };
