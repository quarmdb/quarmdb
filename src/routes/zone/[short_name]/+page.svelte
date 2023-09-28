<script lang="ts">
	import ItemSmall from '$lib/components/ItemSmall.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/zone">All Zones</a>

<h1>{data.zone.long_name}</h1>
<div class="groundSpawnWrapper">
	{#each data.ground_spawns as gs}
		<span><a href="/items/{gs.id}">{gs.name}</a> - ({gs.x},{gs.y},{gs.z})</span>
	{/each}
</div>

<style>
	.groundSpawnWrapper {
		display: flex;
		flex-direction: column;
	}
</style>
