<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/zone">All Zones</a>

<h1>{data.zone.long_name}</h1>
