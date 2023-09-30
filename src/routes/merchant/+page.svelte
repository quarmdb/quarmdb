<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<tr>
		<th>npc name</th>
		<th>npc id</th>
		<th class="items_cell">items</th>
	</tr>
	{#each data.merchants as merchant}
		<tr>
			<td>{merchant.npcname}</td>
			<td>{merchant.npcid}</td>
			<td class="items_cell">
				{#each merchant.items as item}
					<a href="/items/{item.id}">{item.name}</a>
				{/each}
			</td>
		</tr>
	{/each}
</table>

<style>
	td.items_cell {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
