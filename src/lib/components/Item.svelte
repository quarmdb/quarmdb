<script lang="ts">
	import type { ItemsType } from '$lib/schema';
	import { getUseableRaces } from '$lib/db/constants';
	import RawJsonViewer from './RawJSONViewer.svelte';
	import { getUseableClasses } from '$lib/db/constants/eqclasses';
	import { getItemTypeById } from '$lib/db/constants/item';

	export let item: ItemsType;

	const omitZeroEmpty = <T extends object>(
		obj: T
	): {
		[P in Exclude<
			keyof T,
			{
				[Q in keyof T]: T[Q] extends 0 | '' ? Q : never;
			}[keyof T]
		>]: T[P];
	} => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== 0 && v !== '')) as any;

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
</script>

<section class="heading">
	<img class="icon" src="/icon/{item.icon}.gif" alt="icon" />
	<span class="name">{item.name}</span>
</section>
<RawJsonViewer obj={item} />
<section class="info">
	<section class="class_race">
		<span class="classes">Classes:{getClassList(item.classes)}</span>
		<span class="races">Races:{getRaceList(item.races)}</span>
		<span>Item Type: {getItemTypeById(item.itemtype).type}</span>
	</section>
</section>

<pre>{JSON.stringify(omitZeroEmpty(item), null, 2)}</pre>

<style>
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
