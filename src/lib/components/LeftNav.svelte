<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let subDir = '';
	$: subDir = $page.url.pathname.slice(1).split('/')[0];
</script>

<nav>
	<span class="title"><a href="/" class="title">QuarmDB</a></span>
	<ThemeSwitcher />
	<ul>
		<li><a class="major" href="/items/search" class:selected={subDir === 'items'}>Items</a></li>
		<li><a class="major" href="/npc/all" class:selected={subDir === 'npc'}>NPCs</a></li>
		<li><a class="major" href="/zone" class:selected={subDir === 'zone'}>Zone</a></li>
		<ul>
			<li><a class="minor" href="/zone/zem">Zem Info</a></li>
		</ul>
		<li><a class="major" href="/faction/all" class:selected={subDir === 'faction'}>Factions</a></li>
		<!-- <li><a class="major" href="/merchant">Merchant</a></li> -->
	</ul>
</nav>

<style>
	span.title {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 2rem;

		& a.title:visited,
		& a.title {
			color: var(--text-2);
			text-decoration-color: var(--text-2);
		}

		& a.title:hover {
			color: var(--brand);
			text-decoration-color: var(--brand);
		}
	}
	nav {
		width: 100%;
		padding-right: 1rem;
		padding-left: 1rem;
	}

	ul {
		width: 100%;
		display: block;
	}

	li {
		width: 100%;
		list-style: none;
		display: block;
	}

	a.major {
		display: block;
		font-size: 1.5rem;
		border-radius: 1rem;
	}

	a.minor {
		padding-left: 1rem;
	}

	a:visited,
	a {
		color: var(--brand);
		text-decoration-color: var(--text-2);
	}

	a.selected {
		text-decoration: underline;
	}
</style>
