<script lang="ts">
	import { getExpansionByNumber } from '$lib/db/constants';
	import type { ZoneType } from '$lib/schema';
	import type { PageData } from './$types';
	export let data: PageData;

	import SvelteTable from 'svelte-table';

	const rows = data.zones;
	const columns = [
		{
			key: 'long_name',
			title: 'Long Name',
			value: (v: ZoneType) => v.long_name,
			sortable: true
		},
		{
			key: 'short_name',
			title: 'Short Name',
			value: (v: ZoneType) => v.short_name,
			sortable: true
		},
		{
			key: 'zem',
			title: 'Zem',
			value: (v: ZoneType) => v.zone_exp_multiplier,
			sortable: true
		},
		{
			key: 'expansion',
			title: 'Expansion',
			value: (v: ZoneType) => getExpansionByNumber(v.expansion) || 'Special',
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
