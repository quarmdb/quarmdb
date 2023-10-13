<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.items}
	<div class="wrapper">
		{#each data.items as item}
			<ItemCard {item} />
			<span>--{item.id} - {item.details.name}</span>
			<span>Proc '{item.proc === null ? null : item.proc.name}'</span>
			<span>Bard '{item.bard === null ? null : item.bard.name}'</span>
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
