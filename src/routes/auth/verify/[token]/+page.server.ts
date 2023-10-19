import type { PageServerLoadEvent } from './$types';
import { pool } from '$lib/db';
import { error } from '@sveltejs/kit';
import { verifyEmailByToken } from '$lib/db/auth';

export async function load({ params }: PageServerLoadEvent) {
	const client = await pool.connect();
	try {
		const token = params.token;
		if (typeof token !== 'string') {
			console.error('/auth/verify/[token] - Somehow param isnt a string');
			throw error(404);
		}

		return {
			success: await verifyEmailByToken(token, client)
		};
	} catch (e) {
		console.error(e);
		throw error(404);
	} finally {
		client.release();
	}
}
