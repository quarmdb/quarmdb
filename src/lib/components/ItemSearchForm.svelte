<script lang="ts">
	import { goto } from '$app/navigation';

	let searchText = '';
</script>

<form method="get" action="/items/search/">
	<input type="text" bind:value={searchText} />
	<button
		on:click|preventDefault={() => {
			goto(`/items/search/${searchText}`);
		}}>search</button
	>
</form>
