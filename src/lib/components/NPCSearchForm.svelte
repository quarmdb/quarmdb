<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { expansionLookup } from '$lib/db/constants';
	import { BodyTypes } from '$lib/db/constants/bodytype';
	import {
		groupByExpansionShortInfo,
		type ZoneShortInfoType
	} from '$lib/db/constants/zone';
	import { AllZones } from '$lib/db/constants/zoneidnumber';
	import { SearchNameSchema } from '$lib/inputSchemas';

	export let zones: ZoneShortInfoType[] = [];

	let name = $page.url.searchParams.get('name') || '';
	let zone = $page.url.searchParams.get('zone') || 'all';
	let min_level = $page.url.searchParams.get('min_level') || 1;
	let max_level = $page.url.searchParams.get('max_level') || 100;
	let bodytype = $page.url.searchParams.get('bodytype') || 0;

	const search = async () => {
		let u = new URL('/npc/search');
		u.searchParams.set('name', name);
		u.searchParams.set('zone', zone);
		u.searchParams.set('min_level', min_level + '');
		u.searchParams.set('max_level', max_level + '');
		u.searchParams.set('bodytype', bodytype + '');
		await goto(u);
	};

	let nameParse = SearchNameSchema.safeParse(name);
	$: nameParse = SearchNameSchema.safeParse(name);
</script>

<form method="get" action="/npc/search/">
	<section class="input-group">
		<label for="name">Name</label>
		<input
			id="name"
			name="name"
			type="text"
			bind:value={name}
			class:error={!nameParse.success} />
		{#if !nameParse.success}<span class="error"
				>{nameParse.error.issues[0].message}</span
			>{/if}
	</section>
	<section class="sidebyside-group">
		<section class="input-group">
			<label for="min_level">Min Level</label>
			<input
				id="min_level"
				name="min_level"
				min="0"
				max="100"
				step="1"
				type="number"
				bind:value={min_level} />
		</section>
		<section class="input-group">
			<label for="max_level">Max Level</label>
			<input
				id="max_level"
				name="max_level"
				min="0"
				max="100"
				step="1"
				type="number"
				bind:value={max_level} />
		</section>
	</section>
	<section class="input-group">
		<label for="bodytype">Body Type</label>
		<select id="bodytype" name="bodytype" bind:value={bodytype}>
			{#each BodyTypes as bodytype}
				<option value={bodytype.id}>{bodytype.type}</option>
			{/each}
		</select>
	</section>
	<section class="input-group">
		<label for="zone">Zone</label>
		<select id="zone" name="zone" bind:value={zone}>
			<option value="all">All</option>
			{#each groupByExpansionShortInfo(zones) as data}
				<optgroup label={expansionLookup.get(data[0])}>
					{#each data[1] || [] as zone}
						<option value={zone.short_name}>{zone.long_name}</option>
					{/each}
				</optgroup>
			{/each}
		</select>
	</section>
	<button type="reset">Reset</button>
	<button type="submit" on:submit|preventDefault={async () => await search()}
		>Search</button>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
		width: 100%;
		flex-direction: column;
	}

	section.sidebyside-group {
		width: 100%;
		display: flex;
		gap: 1rem;
	}

	section.input-group {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		z-index: 2;

		& label {
			padding-left: 0.5rem;
			display: flex;
			width: 100%;
		}

		& input.error {
			border: red;
		}

		& span.error {
			padding-top: 0.5rem;
			font-size: 0.7rem;
			color: red;
		}
	}
	optgroup {
		background-color: var(--surface-3);
		color: var(--text-3);
	}

	button {
		padding: 1rem;
		min-width: 10rem;
	}
</style>
