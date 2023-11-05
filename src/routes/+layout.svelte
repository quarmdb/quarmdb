<script lang="ts">
	import LeftNav from '$lib/components/LeftNav.svelte';
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import Hamburger from '$lib/svg/Hamburger.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let navClosed = true;
</script>

<ThemeWrapper>
	<div class="wrapper">
		<nav class:closed={navClosed}>
			<LeftNav />
			<div>
				<button on:click={() => (navClosed = !navClosed)}>
					{navClosed ? '>' : '<'}
				</button>
			</div>
		</nav>
		<main class:closed={!navClosed}>
			<article>
				<slot />
			</article>
		</main>
		<footer>
			<p>
				This is not affiliated with <a href="https://www.projectquarm.com"
					>Project Quarm</a
				>.
			</p>
			<p>
				<a href="https://github.com/quarmdb/quarmdb/issues">Issues/Feedback</a>
			</p>
			<p>
				Quarm Database: {data.dbinfo.year}-{data.dbinfo.month}-{data.dbinfo.day}
				at {data.dbinfo.hour}:{data.dbinfo.minute}
			</p>
		</footer>
	</div>
</ThemeWrapper>

<style>
	* {
		--nav-width: 25ch;
	}
	.wrapper {
		min-height: 100dvh;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--surface-1);
		padding: 0;
		margin: 0;
	}

	main {
		display: flex;
		width: 100%;
		flex-grow: 1;
		position: relative;
		margin: 0;
		transition: all 0.5s;
	}
	main.closed {
		padding-left: var(--nav-width);
	}

	article {
		padding: 1rem;
		position: relative;
		width: 100%;
		flex-grow: 1;
	}

	nav {
		width: var(--nav-width);
		height: 100vh;
		z-index: 5;
		position: fixed;
		top: 0;
		left: 0;

		transition: all 0.5s;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: var(--nav-width) 1fr;

		& div {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
		}

		& button {
			font-size: 2rem;
			border-radius: 0 100% 100% 0;
			opacity: 0.7;
			padding: 1rem;
		}

		& button:hover {
			opacity: 1;
		}
	}

	nav.closed {
		transform: translateX(calc(-1 * var(--nav-width)));
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-top: 1rem;
		width: 100%;

		& p {
			display: block;
			width: 100%;
			text-align: center;
		}
	}
</style>
