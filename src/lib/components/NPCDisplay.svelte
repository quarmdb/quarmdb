<script lang="ts">
	import type { FactionListType, NpcTypesType, Spawn2Type } from '$lib/schema';
	import { groupSpawnTable, nameParse } from '$lib/utils';
	import { quintIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import RawJsonViewer from './RawJSONViewer.svelte';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';

	export let npc: NpcTypesType & { racename: string };
	export let loot: { icon: number; id: number; name: string; chance: number }[] = [];
	export let spawn: Spawn2Type[] = [];
	export let factions: (FactionListType & { value: number })[] = [];

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
<RawJsonViewer bind:obj={npc} />

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
			<h3><a href="/zone/{keys}">{getZoneFromShortName(keys).long_name}</a></h3>
			<section class="spawnGroup">
				{#each spawns as s}
					<span>(X:{s.x}, Y:{s.y}, Z:{s.z}) - Respawn: {s.respawntime}s</span>
				{/each}
			</section>
		{/each}
	{/if}
</section>
<h2>Faction Changes</h2>
<section class="factionWrapper">
	{#if factions.length <= 0}
		<span>No Factions</span>
	{:else}
		{#each factions as faction}
			<span><a href="/faction/{faction.id}">{faction.name}({faction.value})</a></span>
		{/each}
	{/if}
</section>

<style>
	section.header {
		display: flex;
		flex-direction: column;
		width: 100%;
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

	section.factionWrapper {
		display: flex;
		flex-direction: column;
	}
</style>
