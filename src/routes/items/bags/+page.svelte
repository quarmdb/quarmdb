<script lang="ts">
	import { getExpansionByNumber } from '$lib/db/constants';
	import { itemSizes } from '$lib/db/constants/item';
	import type { ItemsType } from '$lib/schema';
	import SvelteTable from 'svelte-table';
	import type { PageData } from './$types';
	import SvelteTableCellHref from '$lib/components/SvelteTableCellHref.svelte';
	import { urlBlob } from '$lib/utils';
	export let data: PageData;

	const rows = data.bags;
	const columns = [
		{
			key: 'name',
			title: 'Name',
			value: (e: ItemsType) => e.name,
			sortable: true,
			renderValue: (e: ItemsType) =>
				`<a href='/items/${e.id}/${urlBlob(e.name)}'>${e.name}</a>`,
			parseHTML: true
		},
		{
			key: 'slots',
			title: 'Slots',
			value: (e: ItemsType) => e.bagslots,
			sortable: true
		},
		{
			key: 'size',
			title: 'Size',
			value: (e: ItemsType) => itemSizes[e.bagsize].name,
			sortable: true,
			filterOptions: itemSizes.map(({ name }) => name)
		},
		{
			key: 'wr',
			title: 'Weight Reduction',
			value: (e: ItemsType) => e.bagwr,
			renderValue: (e: ItemsType) => e.bagwr + '%',
			sortable: true
		},
		{
			key: 'expansion',
			title: 'Expansion',
			value: (e: ItemsType) =>
				getExpansionByNumber(e.min_expansion) || 'Special',
			sortable: true,
			filterOptions: [
				getExpansionByNumber(1),
				getExpansionByNumber(2),
				getExpansionByNumber(3),
				getExpansionByNumber(4),
				getExpansionByNumber(5)
			]
		}
	];
</script>

<SvelteTable {rows} {columns} />
