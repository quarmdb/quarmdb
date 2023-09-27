<script lang="ts">
	import { browser } from '$app/environment';
	import { darkModeStore } from '$lib/stores';
</script>

<section>
	<label for="theme-selector" data-theme="test" id="theme-selector-label"></label>
	<input type="checkbox" id="theme-selector" bind:checked={$darkModeStore} />
</section>

<style>
	section {
		position: relative;
	}

	label {
		position: relative;
		width: 5rem;
	}

	label::before {
		content: '';
		border-radius: 100%;
		background-color: var(--surface-4);
		position: absolute;
		left: 0;
	}
</style>
