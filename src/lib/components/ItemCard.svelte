<script lang="ts">
	import { getUseableRaces } from '$lib/db/constants';
	import {
		clickTypes,
		getClickTypeById
	} from '$lib/db/constants/clicktypes';
	import {
		getClassList,
		getUseableClasses
	} from '$lib/db/constants/eqclasses';
	import {
		ItemTypes,
		getSlotList,
		getUseableSlots
	} from '$lib/db/constants/item';
	import { getRaceList } from '$lib/db/constants/races';
	import type { ItemsCardType } from '$lib/db/items';

	export let item: ItemsCardType;
</script>

<article class="item">
	<header>
		<img src="/icon/{item.details.icon}.gif" alt="icon" />
		<span>{item.name}</span>
	</header>
	<main>
		<section class="stats">
			<span>
				{item.details.magic === 1 ? 'MAGIC' : 'NON-MAGIC'}
				{item.details.nodrop === 0 ? 'NO DROP' : 'TRADABLE'}
				{item.details.norent === 0 ? 'NO RENT' : ''}
			</span>
			<span>{ItemTypes[item.details.itemtype].type}</span>
			<span>{getSlotList(item.details.slots)}</span>
			<span>
				{#if item.details.damage !== 0}
					DMG: {item.details.damage}
				{/if}
				{#if item.details.delay !== 0}
					DELAY: {item.details.delay}
				{/if}
			</span>
			{#if item.details.clicktype !== 0}
				<span>
					Click: {getClickTypeById(item.details.clicktype)
						.clickType}
				</span>
			{/if}
			<span class="classes"
				>Classes: {getClassList(item.details.classes)}</span>
			<span class="races"
				>Races: {getRaceList(item.details.races)}</span>
		</section>
	</main>
</article>

<style>
	article.item {
		max-width: 60ch;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		border: var(--surface-3) 1px solid;

		& header {
			width: 100%;
			display: flex;
			justify-content: start;
			align-items: start;
			background-color: var(--surface-3);
			padding: 0.5rem;
			font-size: 1.5rem;
			text-align: center;
		}

		& main {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding: 1rem;

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
