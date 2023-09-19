<script lang="ts">
	import { sort_obj_keys } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/item/all">All Items</a>
Dropped by:
<img src="/icon/{data.item.icon}.gif" alt="icon" />
<pre>{JSON.stringify(sort_obj_keys(data.item), null, 2)}</pre>
<pre>{JSON.stringify(data.dropped, null, 2)}</pre>
