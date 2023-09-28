<script lang="ts">
	import type { ItemsType } from '$lib/schema';

	export let item: Pick<ItemsType, 'icon' | 'id' | 'name'>;
</script>

<div class="item">
	<img src="/icon/{item.icon}.gif" alt="icon" />
	<a href="/items/{item.id}">{item.name}</a>
</div>

<style>
	.item {
		display: flex;
		flex-direction: row;
		margin: 1rem;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
</style>
