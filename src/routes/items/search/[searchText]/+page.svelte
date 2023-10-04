<script lang="ts">
	import { goto } from '$app/navigation';
	import Item from '$lib/components/Item.svelte';
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import SvelteTable from 'svelte-table';
	import type { PageData } from './$types';
	import type { ItemsSearchType } from '$lib/db/items';
	export let data: PageData;
	let searchText = '';

	const rows = data.items;
	const cols = [
		{ key: 'id', title: 'ID', value: (v: ItemsSearchType) => v.id, sortable: true },
		{ key: 'icon', title: 'icon', value: (v: ItemsSearchType) => v.icon },
		{
			key: 'name',
			title: 'Name',
			value: (v: ItemsSearchType) => v.name,
			sortable: true
		}
	];

	function rowClick(value: CustomEvent) {
		console.log(value.detail);
		goto('/items/' + value.detail.row.id);
	}
</script>

<div class="wrapper">
	<section>
		<ItemSearchForm />
	</section>
	<SvelteTable {rows} columns={cols} rowKey="id" on:clickRow={rowClick}></SvelteTable>
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
