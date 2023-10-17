import { z } from 'zod';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	login: async (event) => {
		// TODO log the user in

		return { success: true };
	},
	register: async ({ request, cookies }) => {
		console.log(`register`);
		const formData = await request.formData();
		const email = formData.get('email')?.toString() || '';
		const password = formData.get('password')?.toString() || '';
		const password2 = formData.get('password2')?.toString() || '';

		console.log(email + password + password2);

		if (!z.string().email().safeParse(email).success) {
			return fail(400, { email, badEmail: true });
		}

		return { success: true };
	}
} satisfies Actions;
