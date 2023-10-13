<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<pre>{JSON.stringify(data.spell, null, 2)}</pre>
