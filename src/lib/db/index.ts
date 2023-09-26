import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

let poolCount = 0;

const pool = new Pool({
	connectionString: process.env.SECRET_POSTGRES_URL as string,
	connectionTimeoutMillis: 10000,
	max: 1,
	allowExitOnIdle: true
});

function poolStatus() {
	return `idle: ${pool.idleCount}, waiting: ${pool.waitingCount}, total: ${pool.totalCount}`;
}

pool.on('connect', (client) => {
	client.query('SET DATESTYLE = iso, mdy');
	console.log(`Connect (${poolStatus()})`);
});

pool.on('error', (err, client) => {
	console.error(err);
});

pool.on('acquire', (client) => {
	console.log(`Aquire (${poolStatus()})`);
});

pool.on('release', (error, client) => {
	console.log(`Release (${poolStatus()})`);
});

export { pool };
