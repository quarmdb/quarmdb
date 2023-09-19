<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/npc/all">All NPCS</a>

<pre>{JSON.stringify(data.npc, null, 2)}</pre>
