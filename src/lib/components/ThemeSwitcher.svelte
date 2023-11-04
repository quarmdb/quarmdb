<script lang="ts">
	import { browser } from '$app/environment';
	import { darkModeStore } from '$lib/stores';
</script>

<section>
	<label for="theme-selector" data-theme="test" id="theme-selector-label"
		>Dark/Light</label>
	<input type="checkbox" id="theme-selector" bind:checked={$darkModeStore} />
</section>

<style>
	section {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
		padding-right: 1rem;
	}

	label {
		position: relative;
		width: 5rem;
	}

	label::before {
		content: '';
		border-radius: 100%;
		background-color: var(--surface-2);
		position: absolute;
		left: 0;
	}
</style>
