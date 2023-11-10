<script lang="ts">
	import { playerClassList } from '$lib/db/constants/eqclasses';
	import { getExpForLevel } from '$lib/db/constants/exp';
	import {
		PlayerClassExp,
		type PlayerClassExpType
	} from '$lib/db/constants/races';
	import type { PageData } from './$types';
	export let data: PageData;

	let classSelected: PlayerClassExpType;
</script>

<h1>Experience Information</h1>
<p>
	<a
		href="https://github.com/SecretsOTheP/EQMacEmu/blob/09da8370ff01ea671fbc772511579b8d4876741e/zone/exp.cpp"
		>exp.cpp</a> is the file that controls the exp
</p>

<table>
	<tr>
		<th>Level</th>
		{#each PlayerClassExp as playerClass}
			<th>{playerClass.name}</th>
		{/each}
	</tr>
	{#each { length: 64 } as _, i}
		<tr>
			<td>{i + 1}</td>
			{#each PlayerClassExp as playerClass}
				<td>{getExpForLevel(i + 1, playerClass)}</td>
			{/each}
		</tr>
	{/each}
</table>

<style>
	td {
		padding: 0 0.25rem;
	}
</style>
