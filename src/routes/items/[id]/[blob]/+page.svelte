<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import { nameParse, urlBlob } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/items/search">Items Search</a>
<ItemCard item={data.item} />
<h1 class:faded={data.dropnpcs.length === 0}>Dropped by:</h1>
{#if data.dropnpcs.length === 0}
	<h2 class="faded">Not Dropped</h2>
{:else}
	<ul>
		{#each data.dropnpcs as dropnpc}
			<li>
				<a href="/npc/{dropnpc.id}/{urlBlob(dropnpc.name)}"
					>{nameParse(dropnpc.name)}</a>
			</li>
		{/each}
	</ul>
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

<style>
	.faded {
		opacity: 0.5;
	}
</style>
