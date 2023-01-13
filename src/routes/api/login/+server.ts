import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async ({ request }) => {
	const { username, password } = await request.json();

	let formData = new FormData();

	formData.append('username', username);
	formData.append('password', password);

	const result = await fetch('http://127.0.0.1:8000/login', {
		method: 'POST',
		body: formData
	});

	console.log('RESULT: ', result);

	return json({});
}) satisfies RequestHandler;
