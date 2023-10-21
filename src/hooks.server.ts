import { pool } from '$lib/db';
import { getTokenSecret } from '$lib/db/auth';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import jwt from 'jsonwebtoken';

export const apiHandle: Handle = async ({ resolve, event }) => {
	console.log(`Logging -> ${event.url}`);

	// Apply CORS header for API routes
	console.log(`event.url.pathname -> ${event.url.pathname}`);
	if (event.url.pathname.startsWith('/')) {
		const validDomains: RegExp[] = [
			/^localhost$/gi,
			/^www\.quarmdb\.com$/gi,
			/^[a-zA-Z0-9\-\.]+gitpod.io$/gi
		];
		let allowed = false;
		let corsAllowedDomain = '';

		let originDomain: string = '';
		try {
			console.log(
				`event.request.headers.get('origin') -> ${event.request.headers.get(
					'origin'
				)}`
			);
			if (event.request.headers.get('origin') === null)
				return await resolve(event);
			originDomain = new URL(event.request.headers.get('origin') || '')
				.hostname;
			validDomains.forEach((domainRegEx) => {
				if (domainRegEx.test(originDomain)) {
					allowed = true;
					corsAllowedDomain = `https://${originDomain}`;
				}
			});
		} catch (e) {
			console.log('Invalid origin', e);
		}

		// Required for CORS to work
		if (event.request.method === 'OPTIONS' && allowed) {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods':
						'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': corsAllowedDomain,
					'Access-Control-Allow-Headers': '*'
				}
			});
		}
		const response = await resolve(event);
		if (event.url.pathname.startsWith('/') && allowed) {
			response.headers.append('Access-Control-Allow-Origin', corsAllowedDomain);
		}
		return response;
	}
	return await resolve(event);
};

export const authHandle: Handle = async ({ resolve, event }) => {
	const client = await pool.connect();
	try {
		console.log(await getTokenSecret(client));
		const protectedRoutes = ['/protected'];
		const routeCount = protectedRoutes.filter((route) =>
			event.url.pathname.startsWith(route)
		);
		console.log(`routeCount = ${routeCount.length}`);
		if (routeCount.length === 0) return await resolve(event);
		const { cookies } = event;
		const token = cookies.get('token');
		if (!token) {
			console.error('no token on protected route - REDIRECTING');
			throw error(401, { message: 'Unauthorized access' });
		}
		return await resolve(event);
	} finally {
		client.release();
	}
};

export const handle = sequence(authHandle, apiHandle);
