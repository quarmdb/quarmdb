<script lang="ts">
	import ItemSmall from '$lib/components/ItemSmall.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/zone">All Zones</a>

<h1>{data.zone.long_name}</h1>
<div class="groundSpawnWrapper">
	<h2>Connected Zones ({data.connected_zones.length})</h2>
	{#each data.connected_zones as cz}
		<span><a href="/zone/{cz.short_name}">{cz.long_name}</a></span>
	{/each}
	<h2>Ground Spawns ({data.ground_spawns.length})</h2>
	{#each data.ground_spawns as gs}
		<span><a href="/items/{gs.id}">{gs.name}</a> - ({gs.x},{gs.y},{gs.z})</span>
	{/each}
	<h2>NPCS</h2>
	{#each data.npcs as npc}
		<span><a href="/npcs/{npc.id}">{npc.name}</a></span>
	{/each}
</div>

<style>
	.groundSpawnWrapper {
		display: flex;
		flex-direction: column;
	}
</style>
