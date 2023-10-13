<script lang="ts">
	import { getExpansionByNumber, getUseableRaces } from '$lib/db/constants';
	import { clickTypes, getClickTypeById } from '$lib/db/constants/clicktypes';
	import { getClassList, getUseableClasses } from '$lib/db/constants/eqclasses';
	import {
		ItemTypes,
		getBardLine,
		getItemTypeById,
		getResistsLine,
		getSlotList,
		getStatsLine,
		getUseableSlots
	} from '$lib/db/constants/item';
	import { getRaceList } from '$lib/db/constants/races';
	import type { ItemsCardType } from '$lib/db/items';
	import { urlBlob } from '$lib/utils';

	export let item: ItemsCardType;
</script>

<article class="item">
	<header>
		<section class="title">
			<img src="/icon/{item.details.icon}.gif" alt="icon" />
			<span>{item.name}</span>
		</section>
		<section class="expansion">
			{getExpansionByNumber(item.details.min_expansion) || 'Vanilla'}
		</section>
	</header>
	<main>
		<section class="details">
			<span>
				{item.details.magic === 1 ? 'MAGIC' : ''}
				{item.details.nodrop === 0 ? 'NO DROP' : ''}
				{item.details.norent === 0 ? 'NO RENT' : ''}
			</span>
			<span>{getSlotList(item.details.slots)}</span>
			<span
				>{getItemTypeById(item.details.itemtype).type}
				{item.details.ac !== 0 ? 'AC: ' + item.details.ac : ''}</span>
			<span class="atkdly">
				{#if item.details.damage !== 0}
					DMG: {item.details.damage}
				{/if}
				{#if item.details.delay !== 0}
					DELAY: {item.details.delay}
				{/if}
			</span>
			<span class="stats">{getStatsLine(item.details)}</span>
			<span class="resists">{getResistsLine(item.details)}</span>
			{#if item.proc && item.details.proceffect}
				<span
					>Proc: <a href="/spells/{item.proc.id}/{urlBlob(item.proc.name)}"
						>{item.proc.name}</a
					></span>
			{/if}
			{#if item.click && item.details.clicktype !== 0}
				<span class="click"
					>Click: <a href="/spells/{item.click.id}/{urlBlob(item.click.name)}"
						>{item.click.name}</a>
					({getClickTypeById(item.details.clicktype).short}, {item.details
						.casttime === -1
						? 'Instant'
						: (item.details.casttime / 1000).toFixed(1) + 's'})</span>
			{/if}
			<span class="bard">{getBardLine(item.details)}</span>
			{#if item.worn && item.details.worneffect !== 0}
				<span class="worn"
					>Worn: <a
						href="/spells/{item.details.worneffect}/{urlBlob(item.worn.name)}"
						>{item.worn.name}</a
					></span>
			{/if}
			<span class="weight"
				>Weight: {(item.details.weight / 10.0).toFixed(1)}</span>
			<span class="classes">Classes: {getClassList(item.details.classes)}</span>
			<span class="races">Races: {getRaceList(item.details.races)}</span>
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
			justify-content: space-between;
			align-items: start;
			background-color: var(--surface-3);
			padding: 0.5rem;
			font-size: 1.5rem;
			text-align: center;

			& section.title {
				display: flex;
			}

			& section.expansion {
				font-size: 1rem;
				display: flex;
				align-self: center;
			}
		}

		& main {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding: 1rem;

			& section.details {
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
