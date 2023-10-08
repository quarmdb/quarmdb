<script lang="ts">
	import { Skills } from '$lib/db/constants/skills';
	import { urlBlob } from '$lib/utils';
</script>

<ul>
	{#each Skills as skill}
		<li>
			{#if skill.isTrade}
				<a class="minor" href="/skills/{skill.id}/{urlBlob(skill.name)}">{skill.name}</a>
			{:else}
				{skill.name}
			{/if}
		</li>
	{/each}
</ul>
