<script lang="ts">
	import { SpellGlobalsSchema } from '$lib/schema';
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<h1>Spells</h1>
<table>
	<tr>
		<th>Spell</th>
		<td>Item</td>
	</tr>
	{#each data.spellsByLevel as spellLevel}
		<tr
			><td colspan="2">
				<h2>{spellLevel.level}</h2>
			</td></tr
		>
		{#each spellLevel.spells as spell}
			<tr>
				<td>{spell.spell_name}</td>
				<td><a href="/items/{spell.item_id}">{spell.item_name}</a></td>
			</tr>
		{/each}
	{/each}
</table>
