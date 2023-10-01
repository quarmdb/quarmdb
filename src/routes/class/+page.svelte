<script lang="ts">
	import { goto } from '$app/navigation';
	import { playerClassList } from '$lib/db/constants/eqclasses';
</script>

Currently only have spells/abilities showing

<ul>
	{#each playerClassList as playerClass}
		<li><a href="/class/{playerClass.short_name}">{playerClass.long_name}</a></li>
	{/each}
</ul>
