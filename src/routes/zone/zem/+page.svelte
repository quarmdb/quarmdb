<script lang="ts">
	import type { ZoneType } from '$lib/schema';
	import { debounce } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<tr><th>Zone Long Name</th><th>Zone Short name</th><th>Zone Zem</th></tr>
	{#each data.zones as row}
		<tr>
			<td class="cell">{row.long_name}</td>
			<td class="cell">{row.short_name}</td>
			<td class="cell">{row.zone_exp_multiplier}</td>
		</tr>
	{/each}
</table>

<style>
	table {
		width: 100%;
	}
</style>
