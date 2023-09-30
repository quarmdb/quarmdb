<script lang="ts">
	import { nameCompare, nameParse } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<ul>
	{#each data.rows.sort((a, b) => nameCompare(a.name, b.name)) as row}
		<li><a href="/npc/{row.id}">{row.level} - {nameParse(row.name)}</a></li>
	{/each}
</ul>
