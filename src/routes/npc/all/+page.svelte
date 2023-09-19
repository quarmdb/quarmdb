<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul>
	{#each data.rows as row}
		<li><a href="/npc/{row.id}">{row.level} - {row.name}</a></li>
	{/each}
</ul>
