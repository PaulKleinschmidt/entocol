<script lang="ts">
	let username = '';
	let password = '';

	const login = async () => {
		await fetch('/api/login', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
	};
</script>

<div>
	<form class="flex flex-col max-w-xs" on:submit|preventDefault={login}>
		<label for="username">Username</label>
		<input id="username" class="border-2 rounded-sm border-gray-700" bind:value={username} />
		<label for="password">Password</label>
		<input id="password" class="border-2 rounded-sm border-gray-700" bind:value={password} />
		<button
			class="mt-4 cursor-pointer rounded-l bg-indigo-500 p-1 text-white font-bold"
			type="submit"
			disabled={!username || !password}>Login</button
		>
	</form>
</div>

<style>
</style>
