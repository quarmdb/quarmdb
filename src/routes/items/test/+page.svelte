<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import { getBardLine } from '$lib/db/constants/item';
	import { urlBlob } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.items}
	<div class="wrapper">
		{#each data.items as item}
			<ItemCard {item} />
			<span
				>--{item.id} -
				<a href="/items/{item.id}/{urlBlob(item.details.name)}"
					>{item.details.name}</a
				></span>
			<span>Proc '{item.proc === null ? null : item.proc.name}'</span>
			<span>{getBardLine(item.details)}</span>
			<span>Click '{item.click === null ? null : item.click.name}'</span>
			<span>Worn '{item.worn === null ? null : item.worn.name}'</span>
			<span>Scroll '{item.scroll === null ? null : item.scroll.name}'</span>
		{/each}
	</div>
{/if}

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
