<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	import { page } from '$app/stores';

	let subDir = '';
	$: subDir = $page.url.pathname.slice(1).split('/')[0];
</script>

<nav>
	<ul>
		<li><a href="/class" class:selected={subDir === 'class'}>Classes</a></li>
		<li><a href="/items/search" class:selected={subDir === 'items'}>Items</a></li>
		<li><a href="/npc/all" class:selected={subDir === 'npc'}>NPCS</a></li>
		<li><a href="/zone" class:selected={subDir === 'zone'}>Zones</a></li>
		<li><a href="/faction/all" class:selected={subDir === 'faction'}>Factions</a></li>
		<li><ThemeSwitcher /></li>
	</ul>
</nav>

<style>
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
				& a.selected {
					border: 1px solid var(--brand);
				}
				& a:hover {
					background-color: var(--surface-1);
					color: var(--text-2);
					text-decoration: underline;
				}
			}
		}
	}
</style>
