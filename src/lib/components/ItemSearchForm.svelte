<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ItemSlots, ItemTypes } from '$lib/db/constants/item';
	import { SearchNameSchema } from '$lib/inputSchemas';
	import { z } from 'zod';

	let name = $page.url.searchParams.get('name') || '';
	let slot: number | string = $page.url.searchParams.get('slot') || 'all';
	let type: number | string = $page.url.searchParams.get('type') || 'all';

	$: if (slot || type) {
		if (slot !== 'all') slot = parseInt(slot + '');
		if (type !== 'all') type = parseInt(type + '');
	}

	const search = async () => {
		let u = new URL('/items/search');
		u.searchParams.set('name', name);
		u.searchParams.set('type', type + '');
		u.searchParams.set('slot', slot + '');
		await goto(u);
	};

	let nameParse = SearchNameSchema.safeParse(name);
	$: nameParse = SearchNameSchema.safeParse(name);
</script>

<form method="get" action="/items/search/">
	<section class="input-group">
		<label for="name">Name</label>
		<input id="name" name="name" type="text" bind:value={name} />
		{#if !nameParse.success}<span class="error"
				>{nameParse.error.issues[0].message}</span
			>{/if}
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
	<button type="submit" on:submit|preventDefault={async () => await search()}
		>Search</button>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
		flex-direction: column;
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
			width: 100%;
			border-radius: 0.25em;
			padding: 1rem;
			cursor: text;
		}

		& span.error {
			padding-top: 0.5rem;
			font-size: 0.7rem;
			color: red;
		}

		& select {
			background-color: var(--surface-2);
			width: 100%;
			border-radius: 0.25em;
			padding: 1rem;
			cursor: pointer;
		}
	}

	button {
		margin-top: 1rem;
		min-width: 10rem;
		padding: 1rem;
	}
</style>
