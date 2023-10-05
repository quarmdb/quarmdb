<script lang="ts">
	import NpcSearchForm from '$lib/components/NPCSearchForm.svelte';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import { nameParse } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="wrapper">
	<NpcSearchForm />
	<section>
		{#each data.npcsByZone as zone}
			<h2>{getZoneFromShortName(zone.zone).long_name}</h2>
			{#each zone.npcs as npc}
				<a href="/npc/{npc.id}">{nameParse(npc.name)}</a>
			{/each}
		{/each}
	</section>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		& section {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}
</style>
