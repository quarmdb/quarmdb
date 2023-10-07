<script lang="ts">
	import { ItemTypes } from '$lib/db/constants/item';
	import type { ItemsType } from '$lib/schema';

	export let item: ItemsType;
</script>

<article class="item">
	<header>
		<a href="/items/{item.id}">{item.name}</a>
	</header>
	<main>
		<section>
			{ItemTypes[item.itemtype].type}
		</section>
		<img src="/icon/{item.icon}.gif" alt="icon" />
	</main>
</article>

<style>
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		border: var(--surface-3) 1px solid;
		padding: 1rem;

		& header {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		& main {
			display: flex;
			flex-direction: row;
			width: 100%;

			& img {
				align-self: end;
				justify-self: end;
				width: 2rem;
				aspect-ratio: 1/1;
			}
		}
	}
</style>
