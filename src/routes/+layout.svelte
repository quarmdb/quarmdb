<script lang="ts">
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<ThemeWrapper>
	<div class="wrapper">
		<section class="topbar">
			<span class="title"><a href="/" class="title">QuarmDB</a></span>
			<nav>
				<ul>
					<li><a href="/class">Classes</a></li>
					<li><a href="/items/search">Items</a></li>
					<li><a href="/npc/all">NPCS</a></li>
					<li><a href="/zone">Zones</a></li>
					<li><a href="/faction/all">Factions</a></li>
					<li><ThemeSwitcher /></li>
				</ul>
			</nav>
		</section>
		<main>
			<slot />
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

	section.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		position: sticky;
		top: 0;
		height: 3rem;
		padding-bottom: 1rem;
	}

	a.title:visited,
	a.title {
		color: var(--text-2);
		text-decoration-color: var(--text-2);
	}

	a.title:hover {
		color: var(--brand);
		text-decoration-color: var(--brand);
	}

	span.title {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1rem;
		font-size: 2rem;
	}

	main {
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

	nav {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0;
		margin: 0;

		& ul {
			width: 100%;
			padding: 0;
			display: flex;
			flex-direction: row;
			& li {
				width: 100%;
				list-style: none;
				padding: 0;

				& a {
					width: 100%;
					text-decoration: none;
					display: block;
					text-align: center;
					padding: 0.5rem;
					color: var(--text-2);
					border-radius: 5rem;
				}
				& a:hover {
					background-color: var(--surface-1);
					text-decoration: underline;
				}
			}
		}
	}
</style>
