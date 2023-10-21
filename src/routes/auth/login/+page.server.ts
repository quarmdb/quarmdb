import type { Actions } from './$types';
import { pool } from '$lib/db';
import type { PageServerLoadEvent } from './$types';
import { signIn } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export async function load({ params }: PageServerLoadEvent) {
	return {};
}

export const actions = {
	default: async ({ request, cookies }) => {
		console.log(`login`);
		const formData = await request.formData();
		const email = formData.get('email')?.toString() || '';
		const password = formData.get('password')?.toString() || '';
		const client = await pool.connect();
		try {
			const token = await signIn(email, password, client);
			cookies.set('token', token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				path: '/',
				maxAge: 60 * 60 * 24 * 30
			});
		} catch (err) {
			console.error(err);
			return { email, badLogin: true };
		} finally {
			client.release();
		}
		throw redirect(302, '/protected');
	}
} satisfies Actions;
