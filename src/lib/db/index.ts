import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

const types = pkg.types;

//ints
types.setTypeParser(20, (val) => {
	return parseInt(val, 10);
});

//floating point numbers
types.setTypeParser(1700, (val) => {
	return Number(val);
});

//dates
types.setTypeParser(1114, (val) => {
	return String(val);
});

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
