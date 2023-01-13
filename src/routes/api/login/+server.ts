import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const POST = (async ({ request }) => {
	const { username, password } = await request.json();

	let formData = new FormData();

	formData.append('username', username);
	formData.append('password', password);

	const result = await fetch(`${env.API_URL}/login`, {
		method: 'POST',
		body: formData,
	});

	console.log('RESULT: ', result);

	return json({});
}) satisfies RequestHandler;
