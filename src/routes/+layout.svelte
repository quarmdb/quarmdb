<script lang="ts">
	import '../app.css';
	import ThemeSwitcher from '../lib/components/ThemeSwitcher.svelte';
</script>

<div class="wrapper">
	<aside>
		<h2>Sidebar</h2>
		<nav>
			<ul>
				<li><a href={'#'}>About</a></li>
				<li><a href={'#'}>Works</a></li>
				<li><a href={'#'}>Home</a></li>
				<li><a href={'#'}>Contact</a></li>
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
		margin: 1rem auto;
		padding: 1rem;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;

		@media (min-width: 60rem) {
			grid-template-columns: 250px minmax(10px, 1fr);
		}

		& * {
			padding: 1rem;
		}
	}

	aside {
		position: sticky;
		top: 0;
		align-self: start;
	}

	main {
		background-color: #f7f7f7;
		border-radius: 1rem;

		& p {
			margin-bottom: 1rem;
		}
	}

	nav {
		& li:not(:last-child) {
			margin-bottom: 1rem;
		}
	}

	h2 {
		font-size: 1.25rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	a {
		color: #222;
		text-decoration: none;
	}

	body {
		font-family: system-ui;
		line-height: 1.4;
	}
</style>
