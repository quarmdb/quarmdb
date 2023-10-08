<script lang="ts">
	import NpcSearchForm from '$lib/components/NPCSearchForm.svelte';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import { nameParse } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="wrapper">
	<NpcSearchForm />
	{#each data.npcsByZone as zone}
		<section class="zone">
			<h2>{getZoneFromShortName(zone.zone).long_name}</h2>
			<section class="npcs">
				{#each zone.npcs as npc}
					<a href="/npc/{npc.id}">{nameParse(npc.name)}</a>
				{/each}
			</section>
		</section>
	{/each}
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		& section.zone {
			width: 100%;
			display: flex;
			justify-content: left;
			align-items: start;
			flex-direction: column;
			& section.npcs {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				padding-left: 1rem;
			}
		}
	}
</style>
