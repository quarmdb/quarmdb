<script lang="ts">
	import NpcDisplay from '$lib/components/NPCDisplay.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	import type { FactionListType, NpcTypesType, Spawn2Type } from '$lib/schema';
	import {
		coinSplit,
		coinString,
		groupSpawnTable,
		nameParse,
		urlBlob
	} from '$lib/utils';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import RawJsonViewer from '$lib/components/RawJSONViewer.svelte';

	let npc = data.npc;
	let loot = data.loot;
	let spawns = data.spawns;
	let factions = data.factions;
</script>

<section class="header">
	<h1>{nameParse(npc.name)}</h1>
	<h2>
		Level {npc.level}
		{npc.maxlevel > 0 ? '- ' + npc.maxlevel : ''}
		{npc.racename}
	</h2>
	<section class="info">
		<span>Damage Per Round: {npc.mindmg} - {npc.maxdmg}</span>
		{#if data.coin.maxcash === 0}
			<span>Coin: None</span>
		{:else}
			<span>Min Coin: {coinString(data.coin.mincash)} </span>
			{#if data.coin.avgcoin === 0}
				<span
					>Avg Coin: {coinString(
						Math.floor((data.coin.maxcash + data.coin.mincash) / 2)
					)}</span>
			{:else}
				<span>Avg Coin: {coinString(data.coin.avgcoin)} </span>
			{/if}
			<span>Max Coin: {coinString(data.coin.maxcash)} </span>
		{/if}
		<span
			><a
				href="https://github.com/SecretsOTheP/EQMacEmu/blob/bafd299d1d331ac6bbd81be4e520a9cf60c2121e/zone/loottables.cpp#L39"
				>How Coin Drops Work</a
			></span>
	</section>
</section>
<RawJsonViewer bind:obj={npc} />

<h2>Loot Table</h2>
<section class="lootWrapper">
	{#if loot.length > 0}
		{#each loot as loot}
			<section class="loot">
				<img src="/icon/{loot.icon}.gif" alt="icon" />
				<span
					><a href="/items/{loot.id}/{urlBlob(loot.name)}">{loot.name}</a
					>({loot.chance}%)</span>
			</section>
		{/each}
	{:else}
		<span>No Loot</span>
	{/if}
</section>

<h2>Spawn Table</h2>
<section class="spawnWrapper">
	{#if spawns.length <= 0}
		<span>No Spawns</span>
	{:else}
		{#each spawns as spawn}
			<h3>
				<a href="/zone/{spawn.zone}"
					>{getZoneFromShortName(spawn.zone).long_name}</a>
			</h3>
			<section class="spawnGroup">
				<table>
					<tr>
						<th>Location</th><th>Chance</th><th>Respawn</th><th
							><a
								href="https://github.com/EQMacEmu/Server/blob/1af8bcc8f939e188e93bd02f0991474ec0a9389b/zone/spawn2.cpp#L95"
								>Variance</a
							></th>
					</tr>
					{#each spawn.spawninfo as s}
						<tr>
							<td
								>X: {s.x.toFixed(2)} Y: {s.y.toFixed(2)} Z: {s.z.toFixed(
									2
								)}</td>
							<td>{s.chance}%</td><td>{s.respawntime}s</td>
							<td>
								{#if s.variance === 0}
									None
								{:else}
									±{Math.floor(s.variance / 2)}s
								{/if}
							</td></tr>
					{/each}
				</table>
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
			<span
				><a href="/faction/{faction.id}">{faction.name}({faction.value})</a
				></span>
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
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	section.info {
		display: flex;
		flex-direction: column;
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

	th {
		padding: 1rem;
	}
</style>
