<script lang="ts">
	import { nameCompare, nameParse } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/zone">All Zones</a>
<article>
	<h1>{data.zone.long_name}</h1>
	<h2>Information</h2>
	<table>
		<tr>
			<td>Short Name</td>
			<td>{data.zone.short_name}</td>
		</tr>
		<tr>
			<td>Zem Modifier</td>
			<td>{data.zone.zone_exp_multiplier}</td>
		</tr>
		<tr>
			<td>Pull Limit</td>
			<td>
				{#if data.respawn_reduction_rule.rule_value}
					{data.zone.reducedspawntimers
						? data.zone.newbie_pull_limit
						: data.zone.reduced_pull_limit}
				{:else}
					{data.zone.pull_limit}
				{/if}
			</td>
		</tr>
	</table>
	<h2>Connected Zones ({data.connected_zones.length})</h2>
	{#each data.connected_zones as cz}
		<span><a href="/zone/{cz.short_name}">{cz.long_name}</a></span>
	{/each}
	<h2>Ground Spawns ({data.ground_spawns.length})</h2>
	{#each data.ground_spawns as gs}
		<span class="gs"
			><img src="/icon/{gs.icon}.gif" alt="icon" /><a href="/items/{gs.id}"
				>{gs.name} ({gs.locs.length})</a
			></span
		>
		<span class="gsGroup">
			{#each gs.locs as loc, idx}
				<span>{loc.x}, {loc.y}, {loc.z}</span>
			{/each}
		</span>
	{/each}
	<h2>Spawns Groups ({data.spawns.length})</h2>
	<table>
		<tr><th>X</th><th>Y</th><th>Z</th><th>NPCs</th><th>Respawn Time</th></tr>
		{#each data.spawns as spawn}
			<tr
				><td>{spawn.x.toPrecision(5)}</td><td>{spawn.y.toPrecision(5)}</td><td
					>{spawn.z.toPrecision(5)}</td
				>
				<td class="spawncell">
					{#each spawn.spawns as s}
						<span><a href="/npc/{s.npcid}">{nameParse(s.name)}</a>({s.chance}%)</span>
					{/each}
				</td>
				<td>{spawn.respawntime}s</td>
			</tr>
		{/each}
	</table>
	<h2>Unique NPCS ({data.npcs.length})</h2>
	{#each data.npcs.sort((a, b) => nameCompare(a.name, b.name)) as npc}
		<span><a href="/npc/{npc.id}">{nameParse(npc.name)}</a></span>
	{/each}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
	}
	.spawncell {
		display: flex;
		flex-direction: column;
	}

	span.gs {
		display: flex;
		align-items: center;
	}

	span.gsGroup {
		display: flex;
		flex-direction: column;
	}

	td {
		padding: 0.5rem;
	}
</style>
