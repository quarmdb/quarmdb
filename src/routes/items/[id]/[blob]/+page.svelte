<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import NpcDisplay from '$lib/components/NPCDisplay.svelte';
	import RawJsonViewer from '$lib/components/RawJSONViewer.svelte';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import type { NPCDropsType } from '$lib/db/items';
	import { nameParse, urlBlob } from '$lib/utils';
	import SvelteTable from 'svelte-table';
	import type { PageData } from './$types';
	export let data: PageData;

	const droppedRows = data.drops;
	const droppedCols = [
		{
			key: 'name',
			title: 'NPC',
			value: (v: NPCDropsType) => v.name,
			sortable: true,
			renderValue: (v: NPCDropsType) =>
				`<a href='/npc/${v.id}/${urlBlob(v.name)}'>${nameParse(v.name)}</a>`,
			parseHTML: true
		},
		{
			key: 'zone',
			title: 'Zone',
			value: (z: NPCDropsType) => z.zone,
			sortable: true,
			renderValue: (v: NPCDropsType) =>
				`<a href='/zone/${v.zone}'>${
					getZoneFromShortName(v.zone).long_name
				}</a>`,
			parseHTML: true
		},
		{
			key: 'chance',
			title: 'Drop Chance',
			value: (z: NPCDropsType) => z.chances[0],
			renderValue: (z: NPCDropsType) => z.chances[0].toFixed(2) + '%',
			sortable: true
		},
		{
			key: 'min_level',
			title: 'Min Loot Level',
			value: (z: NPCDropsType) => z.min_looter_level
		},
		{
			key: 'spawns',
			title: 'Number of Spawns',
			value: (z: NPCDropsType) => z.chances.length + '',
			sortable: true
		}
	];
</script>

<a href="/items/search">Items Search</a>
<ItemCard item={data.item} />
<RawJsonViewer obj={data.item.details} />
<h1 class:faded={data.drops.length === 0}>Dropped by:</h1>
{#if data.drops.length === 0}
	<h2 class="faded">Not Dropped</h2>
{:else}
	<SvelteTable rows={droppedRows} columns={droppedCols} />
{/if}

<h1 class:faded={data.merchants.length === 0}>Sold by:</h1>
{#if data.merchants.length === 0}
	<h2 class="faded">No one</h2>
{:else}
	<ul>
		{#each data.merchants as merchants}
			<h2>{getZoneFromShortName(merchants.zone).long_name}</h2>
			{#each merchants.merchants as merchant}
				<li>
					<a href="/npc/{merchant.npcid}/{urlBlob(merchant.name)}"
						>{nameParse(merchant.name)}</a>
				</li>
			{/each}
		{/each}
	</ul>
{/if}
