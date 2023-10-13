<script lang="ts">
	import ItemCard from '$lib/components/ItemCard.svelte';
	import ItemSearchForm from '$lib/components/ItemSearchForm.svelte';
	import { getExpansionByNumber } from '$lib/db/constants';
	import { ItemsSchema, type ItemsType } from '$lib/schema';
	import { urlBlob } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="wrapper">
	<ItemSearchForm />
	<section class="items">
		<table>
			<tr><th>Name</th><th>Introduced Expansion</th></tr>
			{#each data.items as item}
				<tr>
					<td class="name">
						<img src="/icon/{item.icon}.gif" alt="icon" />
						<a href="/items/{item.id}/{urlBlob(item.name)}">
							{item.name}
						</a>
					</td>
					<td
						>{item.min_expansion === 0
							? 'Vanilla Everquest'
							: getExpansionByNumber(item.min_expansion)}</td>
				</tr>
			{/each}
			<tr></tr>
		</table>
	</section>
</div>

<style>
	.wrapper {
		max-width: 700px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		& section.items {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			padding-top: 1rem;
		}

		& td.name {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& th {
			padding: 0.5rem;
		}
	}
</style>
