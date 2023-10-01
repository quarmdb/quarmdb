<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import { nameParse } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/items/search">Items Search</a>
<Item item={data.item} />
<h1>Dropped by:</h1>
<ul>
	{#each data.dropnpcs as dropnpc}
		<li><a href="/npc/{dropnpc.id}">{nameParse(dropnpc.name)}</a></li>
	{/each}
</ul>

<h1>Sold by:</h1>
<ul>
	{#each data.merchants as merchants}
		<h2>{merchants.zone}</h2>
		{#each merchants.merchants as merchant}
			<li><a href="/npc/{merchant.npcid}">{nameParse(merchant.name)}</a></li>
		{/each}
	{/each}
</ul>
