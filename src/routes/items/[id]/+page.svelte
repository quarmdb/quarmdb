<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/items/search">Items Search</a>
<Item item={data.item} />
<p>Dropped by:</p>
<ul>
	{#each data.dropnpcs as dropnpc}
		<li><a href="/npc/{dropnpc.id}">{dropnpc.name}</a></li>
	{/each}
</ul>
