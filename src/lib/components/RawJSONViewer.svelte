<script lang="ts">
	import { quintIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let obj: object;

	let showRaw = false;
</script>

<button on:click|preventDefault={() => (showRaw = !showRaw)}
	>{showRaw ? 'Hide' : 'Show'} Raw Info</button
>
{#if showRaw}
	<section
		class="rawData"
		class:show={showRaw}
		transition:slide={{ duration: 250, easing: quintIn, axis: 'x' }}
	>
		{#each Object.entries(obj) as [key, value]}
			<div class="kvPair">
				<span class="key">{key}</span>
				<span class="value">{value}</span>
			</div>
		{/each}
	</section>
{/if}

<style>
	section.rawData {
		width: 100%;
		display: none;
		grid-template-columns: repeat(4, 1fr);
	}

	section.show {
		display: grid;
	}

	button {
		color: var(--text-1);
		padding: 0.25rem;
	}

	div.kvPair {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0.1rem;
	}

	span.key {
		background-color: var(--surface-4);
		color: var(--text-3);
		text-align: center;
		font-weight: 900;
	}

	span.value {
		border: 1px solid var(--surface-4);
		padding-left: 0.25rem;
	}
</style>
