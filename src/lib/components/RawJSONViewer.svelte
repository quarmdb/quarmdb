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

