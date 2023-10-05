<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { AllZones } from '$lib/db/constants/zoneidnumber';
	let name = $page.url.searchParams.get('name') || '';
	let zone = $page.url.searchParams.get('zone') || 'all';

	const search = async () => {
		let u = new URL('/npc/search');
		u.searchParams.set('name', name);
		u.searchParams.set('zone', zone);
		await goto(u);
	};
</script>

<form method="get" action="/npc/search/">
	<section class="input-group">
		<label for="name">Name</label>
		<input id="name" name="name" type="text" bind:value={name} />
	</section>
	<section class="input-group">
		<label for="zone">Type</label>
		<select id="zone" name="zone" bind:value={zone}>
			<option value="all">All</option>
			{#each AllZones as zone}
				<option value={zone.short_name}>{zone.long_name}</option>
			{/each}
		</select>
	</section>
	<button type="reset">Reset</button>
	<button type="submit" on:submit|preventDefault={async () => await search()}>Search</button>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;

		width: 100%;
	}
	section.input-group {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		z-index: 2;

		& label {
			padding-left: 0.5rem;
		}
		& input {
			background-color: var(--surface-2);
			border-bottom: 1px solid black;
			width: 100%;
			border-radius: 0.25em;
			padding: 1rem;
			cursor: text;
		}

		& select {
			background-color: var(--surface-2);
			border-bottom: 1px solid black;
			width: 100%;
			border-radius: 0.25em;
			padding: 1rem;
			font-size: 1.25rem;
			cursor: pointer;
		}
	}

	button {
		margin-top: 1rem;
		min-width: 10rem;
	}
</style>
