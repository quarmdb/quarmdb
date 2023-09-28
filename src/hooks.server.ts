import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ resolve, event }) => {
	// Apply CORS header for API routes
	if (event.url.pathname.startsWith('/')) {
		const validDomains: RegExp[] = [/^localhost$/gi, /^quarmdb\.vercel\.app$/gi];
		let allowed = false;
		let corsAllowedDomain = '';

		let originDomain: string = '';
		try {
			//console.log(event.request.headers);
			originDomain = new URL(event.request.headers.get('origin') || '').hostname;
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
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
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
