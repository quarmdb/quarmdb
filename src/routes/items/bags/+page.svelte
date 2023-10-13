<script lang="ts">
	import { getExpansionByNumber } from '$lib/db/constants';
	import { itemSizes } from '$lib/db/constants/item';
	import { urlBlob } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<tr
		><th>Name</th><th>Slots</th><th>Size</th><th>Weight Reduction</th><th
			>Expansion</th
		></tr>
	{#each data.bags as bag}
		<tr>
			<td><a href="/items/{bag.id}/{urlBlob(bag.name)}">{bag.name}</a></td>
			<td>{bag.details.bagslots}</td>
			<td>{itemSizes[bag.details.bagsize].name}</td>
			<td>{bag.details.bagwr}%</td>
			<td>{getExpansionByNumber(bag.details.min_expansion)}</td>
		</tr>
	{/each}
</table>
