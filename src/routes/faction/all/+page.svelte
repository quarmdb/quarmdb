<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.factions}
	<table>
		<tr>
			<th>id</th>
			<th>Name</th>
			<th>Base</th>
			<th>See Illusion</th>
			<th>Min Cap</th>
			<th>Max Cap</th>
		</tr>
		{#each data.factions as faction}
			<tr>
				<td>{faction.id}</td>
				<td><a href="/faction/{faction.id}">{faction.name}</a></td>
				<td>{faction.base}</td>
				<td>{faction.see_illusion ? 'true' : 'false'}</td>
				<td>{faction.min_cap}</td>
				<td>{faction.max_cap}</td>
			</tr>
		{/each}
	</table>
{/if}
