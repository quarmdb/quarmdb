<script lang="ts">
	import type { ItemsType } from '$lib/schema';
	import { debounce } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;

	let shownData = data.rows;

	let searchText = '';

	$: shownData;

	function updateShownData() {
		if (searchText === '') shownData = data.rows;
		else {
			shownData = [];
			for (let i = 0; i < data.rows.length; i++) {
				let row = data.rows[i];
				if (row.name.toUpperCase().includes(searchText.toUpperCase())) shownData.push(row);
			}
		}
	}

	const debouncedUpdate = debounce(updateShownData, 350);
</script>

<input type="text" bind:value={searchText} on:input={debouncedUpdate} />

<div class="wrapper">
	{#each shownData as row}
		<div class="item">
			<img src="/icon/{row.icon}.gif" alt="icon" />
			<a href="/items/{row.id}">{row.name}</a>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	.item {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border: 0.0625rem solid var(--surface-3);
	}
</style>
