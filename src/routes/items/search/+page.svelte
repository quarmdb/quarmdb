<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import { ItemsSchema, type ItemsType } from '$lib/schema';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="wrapper">
	<ItemSearchForm />
	<section class="cards">
		{#each data.items as item}
			<ItemCard {item} />
		{/each}
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

		& section.cards {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
		}
	}
</style>
