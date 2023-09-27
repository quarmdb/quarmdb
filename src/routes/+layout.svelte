<script lang="ts">
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<div class="wrapper">
	<aside>
		<h2>QuarmDB</h2>
		<nav>
			<ul>
				<li><a href="/items/all">Items</a></li>
			</ul>
		</nav>
	</aside>
	<main>
		<slot />
	</main>
</div>

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
					padding: 0;
					color: var(--text-2);
				}
				& a:hover {
					background-color: var(--surface-3);
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
