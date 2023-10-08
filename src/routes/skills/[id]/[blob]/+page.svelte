<script lang="ts">
	import { Skills } from '$lib/db/constants/skills';
	import { QsPlayerQglobalUpdatesLogSchema } from '$lib/schema';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>{data.skill.name}</h1>

<table>
	<tr>
		<th>Name</th>
		<th>Trivial</th>
		<th>Ingredients</th>
	</tr>
	{#each data.recipes as recipe}
		<tr>
			<td>{recipe.name}</td>
			<td>{recipe.trivial}</td>
			<td class="ingredients">
				{#each recipe.ingredients as ingredient}
					<span
						><a href="/items/{ingredient.item_id}">{ingredient.item_name}</a
						>({ingredient.componentcount})</span
					>
				{/each}
			</td>
		</tr>
	{/each}
</table>

<style>
	td.ingredients {
		display: flex;
		flex-direction: column;
	}
</style>
