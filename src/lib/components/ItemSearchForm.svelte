<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ItemSlots, ItemTypes } from '$lib/db/constants/item';

	let name = $page.url.searchParams.get('name') || '';
	let slot = $page.url.searchParams.get('slot') || 'any';
	let type = $page.url.searchParams.get('type') || 'any';

	const search = async () => {
		let u = new URL('/items/search');
		u.searchParams.set('name', name);
		u.searchParams.set('type', type);
		u.searchParams.set('slot', slot);
		await goto(u);
	};
</script>

<form method="get" action="/items/search/">
	<section class="input-group">
		<label for="name">Name</label>
		<input id="name" name="name" type="text" bind:value={name} />
	</section>
	<section class="input-group">
		<label for="type">Type</label>
		<select id="type" name="type" bind:value={type}>
			<option value="all">All</option>
			{#each ItemTypes as itemtype}
				<option value={itemtype.id}>{itemtype.type}</option>
			{/each}
		</select>
	</section>
	<section class="input-group">
		<label for="slot">Slot</label>
		<select id="slot" name="slot" bind:value={slot}>
			<option value="all">All</option>
			{#each ItemSlots as itemslot}
				<option value={itemslot.id}>{itemslot.name}</option>
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
