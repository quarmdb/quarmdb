<script lang="ts">
	import type { ZoneType } from '$lib/schema';
	import { debounce } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="table">
	{#each data.zones as row}
		<div class="cell">{row.long_name}</div>
		<div class="cell">{row.short_name}</div>
		<div class="cell">{row.zone_exp_multiplier}</div>
	{/each}
</div>

<style>
	div.table {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	div.cell {
		margin: auto;
		padding: 0;
		width: 100%;
		height: 100%;
		border: 1px solid black;
	}
</style>
