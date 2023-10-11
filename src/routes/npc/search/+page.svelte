<script lang="ts">
	import NpcSearchForm from '$lib/components/NPCSearchForm.svelte';
	import { BodyTypes, getBodyTypeById } from '$lib/db/constants/bodytype';
	import { getZoneFromShortName } from '$lib/db/constants/zoneidnumber';
	import { nameParse, urlBlob } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="wrapper">
	<section class="search">
		<NpcSearchForm zones={data.zones} />
	</section>
	<section class="results">
		<table>
			<tr><th>Name</th><th>Min Level</th><th>Max Level</th><th>Body Type</th></tr>
			{#each data.npcsByZone as zone}
				<tr><td colspan="4" class="zone">{getZoneFromShortName(zone.zone).long_name}</td></tr>
				{#each zone.npcs as npc}
					<tr
						><td><a href="/npc/{npc.id}/{urlBlob(npc.name)}">{nameParse(npc.name)}</a></td><td
							>{npc.level}</td
						><td>{npc.maxlevel === 0 ? npc.level : npc.maxlevel}</td><td
							>{getBodyTypeById(npc.bodytype).type}</td
						></tr
					>
				{/each}
			{/each}
		</table>
	</section>
</div>

<style>
	.wrapper {
		max-width: 700px;
	}
	section.search {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	section.results {
		padding-top: 1rem;
		width: 100%;
		display: flex;

		& table {
			width: 100%;
			& th {
				padding: 0 1rem;
			}
			& td.zone {
				font-size: 1.5rem;
			}
		}
	}
</style>
