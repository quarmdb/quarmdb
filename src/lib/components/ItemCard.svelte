<script lang="ts">
	import { getUseableRaces } from '$lib/db/constants';
	import { getClassList, getUseableClasses } from '$lib/db/constants/eqclasses';
	import { ItemTypes, getSlotList, getUseableSlots } from '$lib/db/constants/item';
	import { getRaceList } from '$lib/db/constants/races';
	import type { ItemsType } from '$lib/schema';

	export let item: ItemsType;
</script>

<article class="item">
	<header>
		<img src="/icon/{item.icon}.gif" alt="icon" />
		<a href="/items/{item.id}">{item.name}</a>
	</header>
	<main>
		<section class="stats">
			<span>{ItemTypes[item.itemtype].type}</span>
			<span>{getSlotList(item.slots)}</span>
			<span
				>{item.magic === 1 ? 'MAGIC' : 'NON-MAGIC'}
				{item.nodrop === 0 ? 'NO DROP' : 'TRADABLE'}
				{item.norent === 0 ? 'NO RENT' : ''}</span
			>
			{#if item.damage !== 0}<span>DMG: {item.damage}</span>{/if}
			{#if item.delay !== 0}<span>DELAY: {item.delay}</span>{/if}
			<span class="classes">Classes: {getClassList(item.classes)}</span>
			<span class="races">Races: {getRaceList(item.races)}</span>
		</section>
	</main>
</article>

<style>
	article.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		border: var(--surface-3) 1px solid;
		border-radius: 0.5rem;
		padding: 1rem;

		& header {
			width: 100%;
			display: flex;
			justify-content: start;
			align-items: start;
		}

		& main {
			display: flex;
			flex-direction: row;
			width: 100%;

			& section.stats {
				display: flex;
				flex-direction: column;
			}

			& img {
				align-self: flex-start;
				justify-self: end;
				width: 3rem;
				aspect-ratio: 1/1;
			}
		}
	}
</style>
