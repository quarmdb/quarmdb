<script lang="ts">
	import type { ItemsType } from '$lib/schema';
	import { getUseableClasses, getUseableRaces } from '$lib/db/constants';

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
</script>

<section>
	<img class="icon" src="/icon/{item.icon}.gif" alt="icon" />
	<span>{item.name}</span>
</section>
<pre>Classes:{#each getUseableClasses(item.classes) as useableClass}{useableClass.shortName},{/each}</pre>
<pre>Races:{#each getUseableRaces(item.races) as race}{race.shortName},{/each}</pre>

<pre></pre>
<pre>{JSON.stringify(omitZeroEmpty(item), null, 2)}</pre>

<style>
	section {
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
</style>
