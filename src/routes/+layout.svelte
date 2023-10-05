<script lang="ts">
	import LeftNav from '$lib/components/LeftNav.svelte';
	import NavigationTopBar from '$lib/components/NavigationTopBar.svelte';
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<ThemeWrapper>
	<div class="wrapper">
		<main>
			<nav class="left">
				<LeftNav />
			</nav>
			<article>
				<slot />
			</article>
		</main>
		<footer>
			<p>
				This is not affiliated with <a href="https://www.projectquarm.com">Project Quarm</a>. Just a
				labor of love.
			</p>
		</footer>
	</div>
</ThemeWrapper>

<style>
	.wrapper {
		width: 100%;
		min-height: 100dvh;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		background-color: var(--surface-2);
	}

	main {
		display: flex;
		flex-direction: row;
		width: 100%;
		flex-grow: 1;
	}

	nav.left {
		width: 400px;
	}
	article {
		background-color: var(--surface-1);
		border-radius: 0.5rem;
		padding: 1rem;
		position: relative;
		width: 100%;
		flex-grow: 1;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 1rem;
	}
</style>
