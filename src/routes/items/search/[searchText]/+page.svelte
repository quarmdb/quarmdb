<script lang="ts">
	import { goto } from '$app/navigation';
	import Item from '$lib/components/Item.svelte';
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import SvelteTable from 'svelte-table';
	import type { PageData } from './$types';
	import type { ItemsSearchType } from '$lib/db/items';
	import ItemCard from '$lib/components/ItemCard.svelte';
	export let data: PageData;
</script>

<div class="wrapper">
	<ItemSearchForm />
	<section class="items">
		{#each data.items as item}
			<ItemCard {item} />
		{/each}
	</section>
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
</style>
