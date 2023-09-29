<script lang="ts">
	import { goto } from '$app/navigation';
	import Item from '$lib/components/Item.svelte';
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import ItemSmall from '$lib/components/ItemSmall.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	let searchText = '';
</script>

<div class="wrapper">
	<section>
		<ItemSearchForm />
	</section>
	{#if data.items.length === 1}
		<Item item={data.items[0]} />
	{:else}
		{#each data.items as item, i}
			<div class="itemWrapper">
				<ItemSmall item={data.items[i]} />
			</div>
		{/each}
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
	div.itemWrapper {
		display: flex;
		flex-direction: column;
	}
</style>
