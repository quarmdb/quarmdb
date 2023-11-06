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

