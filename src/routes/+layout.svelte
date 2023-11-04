<script lang="ts">
	import LeftNav from '$lib/components/LeftNav.svelte';
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import Hamburger from '$lib/svg/Hamburger.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let mobileNavClosed = true;
</script>

<ThemeWrapper>
	<div class="wrapper">
		<main>
			<nav class="left" class:closed={mobileNavClosed}>
				<button
					class="menu"
					class:closed={mobileNavClosed}
					on:click={() => (mobileNavClosed = !mobileNavClosed)}
					><Hamburger bind:open={mobileNavClosed} /></button>
				<LeftNav
					on:navClicked={() => {
						console.log('recieve nav click');
						mobileNavClosed = true;
					}} />
			</nav>
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
	.wrapper {
		width: 100%;
		min-height: calc(100dvh - 4rem);
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--surface-1);
		padding: 0;
		margin: 0;
	}

	main {
		display: flex;
		flex-direction: row;
		width: 100%;
		flex-grow: 1;
		position: relative;
		padding-top: 4rem;
		margin: 0;
	}

	article {
		padding: 1rem;
		position: relative;
		width: 100%;
		flex-grow: 1;
	}

	nav.left {
		width: 100%;
		height: 100dvh;
		background-color: var(--surface-2);
		z-index: 5;
		position: absolute;
		top: 0;
		left: 0;
		align-self: flex-start;
		transition: all 0.5s;
		padding: 0;
		margin: 0;
	}

	nav.left.closed {
		transform: translateX(-100%);
	}

	button.menu {
		position: absolute;
		top: 0;
		right: 0;
		width: 4rem;
		height: 4rem;
		z-index: 10;
		transform: none;
		transition: all 0.5s;
	}

	button.menu.closed {
		transform: translateX(4rem);
	}

	@media (min-width: 768px) {
		main {
			padding: 0;
		}
		nav.left {
			position: sticky;
			padding-top: 1rem;
			width: 16rem;
			height: fit-content;
			background-color: var(--surface-1);
		}

		nav.left.closed {
			transform: none;
		}

		button.menu {
			display: none;
		}

		article {
			padding: 1rem;
			border-left: 1px solid var(--surface-2);
			position: relative;
			width: 100%;
			flex-grow: 1;
		}

		.wrapper {
			width: 100%;
			min-height: 100dvh;
			padding: 0 1rem 1rem 1rem;
			display: flex;
			flex-direction: column;
			background-color: var(--surface-1);
		}
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
