<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

{#if data.factions}
	<table>
		<tr>
			<th>id</th>
			<th>name</th>
		</tr>
		{#each data.factions as faction}
			<tr>
				<td>{faction.id}</td>
				<td>{faction.name}</td>
			</tr>
		{/each}
	</table>
{/if}
