<script lang="ts">
	import { expansionLookup } from '$lib/db/constants';
	import type { ZoneType } from '$lib/schema';
	import type { PageData } from './$types';
	export let data: PageData;

	function groupByExpansion(zones: ZoneType[]) {
		const group: Map<number, ZoneType[]> = new Map();
		zones.forEach((zone) => {
			let temp = group.get(zone.expansion);
			if (temp === undefined) temp = [zone];
			else temp.push(zone);
			group.set(zone.expansion, temp);
		});
		return group;
	}
</script>

<section>
	{#each Object.keys(data.zones).sort() as key}
		{#if expansionLookup.get(parseInt(key)) !== undefined}
			<span class="expansion">{expansionLookup.get(parseInt(key))}</span>
			<div class="expansion">
				{#each groupByExpansion(data.zones).get(parseInt(key)) || [] as zone}
					<span class="zone"><a href="/zone/{zone.short_name}">{zone.long_name}</a></span>
				{/each}
			</div>
		{/if}
	{/each}
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	span.expansion {
		font-size: 3rem;
	}
	div.expansion {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-top: 1px solid var(--surface-4);
	}

	.zone {
		font-size: 1.25rem;
		text-align: center;
	}
</style>
