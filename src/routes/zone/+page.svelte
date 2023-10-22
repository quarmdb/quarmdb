<script lang="ts">
	import { expansionLookup } from '$lib/db/constants';
	import { groupByExpansion } from '$lib/db/constants/zone';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<!-- <pre>{JSON.stringify(data.zones, null, 2)}</pre> -->
<section>
	{#each data.zones as exp}
		{#if expansionLookup.get(exp.expansion) !== undefined}
			<span class="expansion">{expansionLookup.get(exp.expansion)}</span>
			<div class="expansion">
				{#each exp.zones as zone}
					<span class="zone"
						><a href="/zone/{zone.short_name}">{zone.long_name}</a></span>
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
