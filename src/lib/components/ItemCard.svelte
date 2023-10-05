<script lang="ts">
	import { ItemTypes } from '$lib/db/constants/item';
	import type { ItemsType } from '$lib/schema';

	export let item: Pick<ItemsType, 'icon' | 'id' | 'name' | 'itemtype'>;
</script>

<div class="item">
	<header>
		<img src="/icon/{item.icon}.gif" alt="icon" />
		<a href="/items/{item.id}">{item.name}</a>
	</header>
	<main>
		{ItemTypes[item.itemtype].type}
	</main>
</div>

<style>
	.item {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		align-items: center;
		justify-content: center;
		font-size: 1rem;

		& img {
			width: 2rem;
			aspect-ratio: 1/1;
		}
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
