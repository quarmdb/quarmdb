<script lang="ts">
	import { getConsiderLevels } from '$lib/db/constants/consider';
	import { playerClassList } from '$lib/db/constants/eqclasses';
	import { getExpForLevel } from '$lib/db/constants/exp';
	import {
		PlayerRaceExp,
		type PlayerRaceExpType
	} from '$lib/db/constants/races';
	import type { PageData } from './$types';
	export let data: PageData;

	let raceSelected: PlayerRaceExpType = PlayerRaceExp[0];
</script>

<article>
	<h1>Experience Information</h1>
	<p>
		<a
			href="https://github.com/SecretsOTheP/EQMacEmu/blob/09da8370ff01ea671fbc772511579b8d4876741e/zone/exp.cpp"
			>exp.cpp</a> is the file that controls the exp
	</p>

	<select name="playerClass" id="playerClass" bind:value={raceSelected}>
		{#each PlayerRaceExp as playerClass}
			<option value={playerClass}>{playerClass.name}</option>
		{/each}
	</select>
	<table>
		<tr>
			<th>Level</th>
			<th>Exp This Level</th>
			<th>Total Exp Needed</th>
			<th>Green Range</th>
			<th>Light Blue Range</th>
			<th>Blue Range</th>
			<th>White Range</th>
			<th>Yellow Range</th>
			<th>Red Range</th>
		</tr>
		{#each { length: 64 } as _, i}
			<tr>
				<td>{i + 1}</td>
				<td
					>{getExpForLevel(i + 1, raceSelected) -
						getExpForLevel(i, raceSelected)}</td>
				<td>{getExpForLevel(i + 1, raceSelected)}</td>
				<td
					>{getConsiderLevels(i + 1).green.min} - {getConsiderLevels(i + 1)
						.green.max}</td>
				<td
					>{getConsiderLevels(i + 1).lightblue.min} - {getConsiderLevels(i + 1)
						.lightblue.max}</td>
				<td
					>{getConsiderLevels(i + 1).blue.min} - {getConsiderLevels(i + 1).blue
						.max}</td>
				<td>{getConsiderLevels(i + 1).white}</td>
				<td
					>{getConsiderLevels(i + 1).yellow.min} - {getConsiderLevels(i + 1)
						.yellow.max}</td>
				<td
					>{getConsiderLevels(i + 1).red.min} - {getConsiderLevels(i + 1).red
						.max}</td>
			</tr>
		{/each}
	</table>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	td {
		padding: 0 0.25rem;
	}
</style>
