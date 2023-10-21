import { redirect } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';

export async function load({ cookies }: PageServerLoadEvent) {
	cookies.delete('token', {
		path: '/'
	});
	throw redirect(301, '/auth/login');
}
