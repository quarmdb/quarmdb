import { z } from 'zod';
import type { Actions } from './$types';
import { error, fail } from '@sveltejs/kit';
import { pool } from '$lib/db';
import { isEmailRegistered, register } from '$lib/db/auth';
import type { PageServerLoadEvent } from './$types';
import { FactionListModSchema } from '$lib/schema';

export async function load({ params }: PageServerLoadEvent) {
	return {};
}

export const actions = {
	default: async ({ request, cookies }) => {
		console.log(`register`);
		const formData = await request.formData();
		const email = formData.get('email')?.toString() || '';
		const password1 = formData.get('password1')?.toString() || '';
		const password2 = formData.get('password2')?.toString() || '';

		console.log(email);

		if (password1 != password2) {
			return fail(400, { email, password1, password2, passwordMismatch: true });
		}

		if (!z.string().email().safeParse(email).success) {
			return fail(400, { email, password1, password2, badEmail: true });
		}
		const client = await pool.connect();
		try {
			if (await isEmailRegistered(email, client)) {
				return fail(400, {
					email,
					password1,
					password2,
					emailIsRegistered: true
				});
			}

			await register(
				email,
				password1,
				request.headers.get('origin') || 'https://www.quarmdb.com/',
				client
			);
			return { register: true };
		} catch (err) {
			console.error(err);
			throw error(404);
		} finally {
			client.release();
		}
	}
} satisfies Actions;
