<script lang="ts">
	import { browser } from '$app/environment';
	import { darkModeStore } from '$lib/stores';
</script>

<section>
	<input type="checkbox" id="theme-selector" bind:checked={$darkModeStore} />
	<label for="theme-selector" data-theme="test" id="theme-selector-label"
	></label>
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

	input {
		display: none;
	}

	label {
		position: relative;
		width: 4rem;
		background-color: var(--surface-3);
		border-radius: 3rem;
		height: 2rem;
		transition: 0.5s;
	}

	label:before {
		content: '';
		border-radius: 100%;
		background-color: yellow;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		width: 2rem;
		height: 2rem;
		transition: 0.25s;
	}

	input:checked + label:before {
		content: '';
		border-radius: 100%;
		background-color: gray;
		position: absolute;
		transform: translateX(2rem);
	}
</style>
