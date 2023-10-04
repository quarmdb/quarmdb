<script lang="ts">
	import type { ItemsType } from '$lib/schema';
	import { getUseableRaces, getUseableSlots } from '$lib/db/constants';
	import RawJsonViewer from './RawJSONViewer.svelte';
	import { getUseableClasses } from '$lib/db/constants/eqclasses';
	import { getItemTypeById } from '$lib/db/constants/item';

	export let item: ItemsType;

	const getClassList = (classMask: number): string => {
		return getUseableClasses(classMask)
			.reduce<string[]>((acc, value, idx) => {
				acc.push(value.short_name);
				return acc;
			}, [])
			.join(',');
	};

	const getRaceList = (raceMask: number): string => {
		return getUseableRaces(raceMask)
			.reduce<string[]>((acc, value, idx) => {
				acc.push(value.short_name);
				return acc;
			}, [])
			.join(',');
	};

	const getSlotList = (slotMask: number): string => {
		return getUseableSlots(slotMask)
			.reduce<string[]>((acc, value, idx) => {
				acc.push(value.name);
				return acc;
			}, [])
			.join(',');
	};
</script>

<div class="wrapper">
	<section class="titleLine">
		<img class="icon" src="/icon/{item.icon}.gif" alt="icon" />
		<span class="name">{item.name}</span>
	</section>
	<section class="topline">
		<span>{item.magic === 1 ? 'MAGIC ITEM' : ''}</span>
		<span>{item.nodrop === 1 ? 'NO DROP' : ''}</span>
		<span>{item.norent === 0 ? 'NO RENT' : ''}</span>
	</section>
	<section class="info">
		<span>Slots: {getSlotList(item.slots)}</span>
		<span class="classes">Classes: {getClassList(item.classes)}</span>
		<span class="races">Races: {getRaceList(item.races)}</span>
		<span>Item Type: {getItemTypeById(item.itemtype).type}</span>
	</section>
</div>
<RawJsonViewer obj={item} />

<style>
	div.wrapper {
		display: flex;
		flex-direction: column;

		& section.titleLine {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			& img {
				width: clamp(5vh, 2.5vw, 10rem);
				aspect-ratio: 1 / 1;
			}
			& span.name {
				font-size: 5vw;
				width: 100%;
				padding-left: 1rem;
			}
		}

		&section.topline {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
		}
	}
	section.heading {
		display: flex;
		flex-direction: row;
		width: 100%;

		& span {
			font-size: 3.5rem;
			padding-left: 1rem;
		}

		& img {
			align-self: center;
			height: 5rem;
			aspect-ratio: 1/1;
		}
	}

	section.info {
		display: flex;
		flex-direction: column;

		& section.class_race {
			display: flex;
			flex-direction: column;
		}
	}
</style>
