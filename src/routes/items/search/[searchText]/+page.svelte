<script lang="ts">
	import Item from '$lib/components/Item.svelte';
	import ItemSmall from '$lib/components/ItemSmall.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.items.length === 1}
	<Item item={data.items[0]} />
{:else}
	{#each data.items as item, i}
		<div class="itemWrapper">
			<ItemSmall item={data.items[i]} />
		</div>
	{/each}
{/if}

<style>
	div.itemWrapper {
		display: flex;
		flex-direction: column;
	}
</style>
