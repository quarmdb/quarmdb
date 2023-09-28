<script lang="ts">
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<ThemeWrapper>
	<div class="wrapper">
		<aside>
			<section>
				<h2>QuarmDB</h2>
				<ThemeSwitcher />
			</section>
			<nav>
				<ul>
					<li><a href="/items/search">Items</a></li>
					<li><a href="/npc/all">NPCS</a></li>
					<li><a href="/zone">Zones</a></li>
				</ul>
			</nav>
		</aside>
		<main>
			<slot />
		</main>
	</div>
</ThemeWrapper>

<style>
	.wrapper {
		width: 100%;
		min-height: 100dvh;
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
		background-color: var(--surface-2);

		@media (min-width: 60rem) {
			grid-template-columns: 250px minmax(10px, 1fr);
		}
	}

	section {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}

	aside {
		position: sticky;
		top: 0;
		align-self: start;
		display: flex;
		flex-direction: column;
	}

	main {
		background-color: var(--surface-1);
		border-radius: 1rem;
		padding: 1rem;
		position: relative;
	}

	nav {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0;

		& ul {
			width: 100%;
			padding: 0;
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

	h2 {
		font-size: 1.25rem;
		font-weight: bold;
		color: var(--text-2);
	}
</style>
