<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<a href="/faction/all">All Factions</a>
<pre>{JSON.stringify(data.faction, null, 2)}</pre>
