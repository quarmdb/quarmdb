<script lang="ts">
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import type { PageData } from './$types';
	import { urlBlob } from '$lib/utils';
	import { expansionLookup, getExpansionByNumber } from '$lib/db/constants';
	export let data: PageData;
</script>

<div class="wrapper">
	<ItemSearchForm />
	<section class="items">
		<table>
			<tr><th>Name</th><th>Expansion Start</th><th>Expansion End</th></tr>
			{#each data.items as item}
				<tr
					><td
						><img src="/icon/{item.icon}.gif" alt="icon" /><a
							href="/items/{item.id}/{urlBlob(item.name)}">{item.name}</a
						></td>
					<td>{getExpansionByNumber(item.min_expansion)}</td>
					<td>{getExpansionByNumber(item.max_expansion)}</td>
				</tr>
			{/each}
			<tr></tr>
		</table>
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
	}
</style>
