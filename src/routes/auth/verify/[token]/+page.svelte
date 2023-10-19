<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.success}
	<h1>Email Successfully Verified</h1>
{:else}
	<h1>Email Not Successfully Verified</h1>
{/if}
