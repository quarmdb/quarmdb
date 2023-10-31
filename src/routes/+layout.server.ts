import type { LayoutServerData } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import { getDBInfo } from '$lib/db/dbinfo';

export async function load() {
	const client = await pool.connect();
	try {
		return {
			dbinfo: await getDBInfo(client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
