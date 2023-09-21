<script lang="ts">
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<div class="wrapper">
	<nav>
		<span>QuarmDB</span>
		<ThemeSwitcher />
	</nav>

	<main>
		<slot />
	</main>
</div>

<style>
	div.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 100vh;
	}

	nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border: 0.25rem solid var(--brand);
	}
</style>
