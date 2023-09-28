<script lang="ts">
	import ItemSmall from '$lib/components/ItemSmall.svelte';
	import { browser } from '$app/environment';
	import Item from '$lib/components/Item.svelte';
	import { ItemsSchema, type ItemsType } from '$lib/schema';
	import { onMount } from 'svelte';

	let searchText = '';

	let itemsPromise: Promise<ItemsType[]>;

	async function search(): Promise<ItemsType[]> {
		try {
			const response = await fetch('/items/search', {
				method: 'POST',
				body: JSON.stringify({ searchText }),
				headers: {
					'content-type': 'application/json'
				}
			});
			console.log('before');
			const res = await response.json();
			console.log(res);
			const itemsParse = ItemsSchema.array().safeParse(res);
			if (!itemsParse.success) return [];
			return itemsParse.data;
		} catch (err) {
			console.error(err);
			throw err;
		}
	}
</script>

<div class="wrapper">
	<section>
		<input type="text" bind:value={searchText} />
		<button
			on:click|preventDefault={() => {
				itemsPromise = search();
			}}>search</button
		>
	</section>
	{#if itemsPromise !== undefined}
		{#await itemsPromise}
			<span>...Loading</span>
		{:then items}
			{#if items.length === 0}
				<span>No items</span>
			{:else}
				<div class="itemWrapper">
					{#each items as item}
						<ItemSmall {item} />
					{/each}
				</div>
			{/if}
		{/await}
	{/if}
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.itemWrapper {
		display: flex;
		flex-direction: row;
		flex-flow: column;
	}
</style>
