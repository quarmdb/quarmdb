<script lang="ts">
	import type { NpcTypesType, Spawn2Type } from '$lib/schema';
	import { groupSpawnTable, nameParse } from '$lib/utils';
	import { quintIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let npc: NpcTypesType & { racename: string };
	export let loot: { icon: number; id: number; name: string; chance: number }[] = [];
	export let spawn: Spawn2Type[] = [];

	let showRaw = false;
</script>

<section class="header">
	<h1>{nameParse(npc.name)}</h1>
	<h2>Level {npc.level} {npc.maxlevel > 0 ? '- ' + npc.maxlevel : ''} {npc.racename}</h2>
	<section class="info">
		<span>Damage Per Round</span>
		<span>{npc.mindmg} - {npc.maxdmg}</span>
	</section>
</section>
<button on:click|preventDefault={() => (showRaw = !showRaw)}
	>{showRaw ? 'Hide' : 'Show'} Raw Info</button
>
{#if showRaw}
	<section
		class="rawData"
		class:show={showRaw}
		transition:slide={{ duration: 250, easing: quintIn, axis: 'x' }}
	>
		{#each Object.entries(npc) as [key, value]}
			<div class="kvPair">
				<span class="key">{key}</span>
				<span class="value">{value}</span>
			</div>
		{/each}
	</section>
{/if}

<h2>Loot Table</h2>
<section class="lootWrapper">
	{#if loot.length > 0}
		{#each loot as loot}
			<section class="loot">
				<img src="/icon/{loot.icon}.gif" alt="icon" />
				<span>{loot.chance}% - <a href="/items/{loot.id}">{loot.name}</a></span>
			</section>
		{/each}
	{:else}
		<span>No Loot</span>
	{/if}
</section>

<h2>Spawn Table</h2>
<section class="spawnWrapper">
	{#if spawn.length <= 0}
		<span>No Spawns</span>
	{:else}
		{#each groupSpawnTable(spawn) as [keys, spawns]}
			<h3>{keys}</h3>
			<section class="spawnGroup">
				{#each spawns as s}
					<span>(X:{s.x}, Y:{s.y}, Z:{s.z}) - Respawn: {s.respawntime}s</span>
				{/each}
			</section>
		{/each}
	{/if}
</section>

<style>
	section.header {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	section.rawData {
		width: 100%;
		display: none;
		grid-template-columns: repeat(4, 1fr);
	}

	section.show {
		display: grid;
	}

	button {
		color: var(--text-1);
		padding: 0.25rem;
	}

	div.kvPair {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0.1rem;
	}

	span.key {
		background-color: var(--surface-4);
		color: var(--text-3);
		text-align: center;
		font-weight: 900;
	}

	span.value {
		border: 1px solid var(--surface-4);
		padding-left: 0.25rem;
	}

	section.lootWrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}
	section.loot {
		display: flex;
		flex-direction: row;
	}

	section.spawnGroup {
		display: flex;
		flex-direction: column;
	}
</style>
