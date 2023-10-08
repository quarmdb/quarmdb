<script lang="ts">
	import type { ItemsType } from '$lib/schema';
	import { getUseableRaces } from '$lib/db/constants';
	import RawJsonViewer from './RawJSONViewer.svelte';
	import { getClassList, getUseableClasses } from '$lib/db/constants/eqclasses';
	import { ItemTypes, getItemTypeById, getSlotList, getUseableSlots } from '$lib/db/constants/item';
	import { getClickTypeById } from '$lib/db/constants/clicktypes';
	import { getRaceList } from '$lib/db/constants/races';

	export let item: ItemsType;
</script>

<article class="item">
	<header>{item.name}</header>
	<main>
		<section class="stats">
			<span>{ItemTypes[item.itemtype].type}</span>
			<span>{getSlotList(item.slots)}</span>
			<span
				>{item.magic === 1 ? 'MAGIC' : 'NON-MAGIC'}
				{item.nodrop === 0 ? 'NO DROP' : 'TRADABLE'}{item.norent === 0 ? 'NO RENT' : ''}</span
			>
			{#if item.damage !== 0}<span>DMG: {item.damage}</span>{/if}
			{#if item.delay !== 0}<span>DELAY: {item.delay}</span>{/if}
			<span class="classes">Classes: {getClassList(item.classes)}</span>
			<span class="races">Races: {getRaceList(item.races)}</span>
		</section>
		<section class="icon">
			<img src="/icon/{item.icon}.gif" alt="icon" />
		</section>
	</main>
</article>
<div>
	{#if item.clicktype !== 0}
		<section class="click">
			<span>Clickable</span>
			<span>{getClickTypeById(item.clicktype).clickType}</span>
		</section>
	{/if}
</div>
<RawJsonViewer obj={item} />

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
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 2rem;
		}

		& main {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 100%;

			& section.stats {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				width: 100%;
			}

			& section.icon {
				display: flex;
				height: 100%;
				justify-content: end;
				& img {
					width: 7rem;
					aspect-ratio: 1/1;
				}
			}
		}
	}
</style>
