<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/npc/all">All NPCS</a>

<pre>{JSON.stringify(data.npc, null, 2)}</pre>

<h2>Loot Table</h2>
{#if data.loot.length > 0}
	{#each data.loot as loot}
		<section class="loot">
			<img src="/icon/{loot.icon}.gif" alt="icon" />
			<span>{loot.chance}% - <a href="/items/{loot.id}">{loot.name}</a></span>
		</section>
	{/each}
{:else}
	<span>No Loot</span>
{/if}
<pre>{JSON.stringify(data.spawn, null, 2)}</pre>

<style>
	section.loot {
		display: flex;
		flex-direction: row;
	}
</style>
