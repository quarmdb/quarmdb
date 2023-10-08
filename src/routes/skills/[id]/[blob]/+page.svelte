<script lang="ts">
	import { urlBlob } from '$lib/utils';
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
				<table>
					<tr>
						<th>item_name</th><th>componentcount</th><th>successcount</th><th>failcount</th><th
							>isContainer</th
						></tr
					>
					{#each recipe.ingredients as ingredient}
						<tr>
							<td
								><a href="/items/{ingredient.item_id}/{urlBlob(ingredient.item_name)}"
									>{ingredient.item_name}</a
								></td
							>
							<td>{ingredient.componentcount}</td>
							<td>{ingredient.successcount}</td>
							<td>{ingredient.failcount}</td>
							<td>{ingredient.iscontainer}</td>
						</tr>
					{/each}
				</table>
			</td>
		</tr>
	{/each}
</table>

<style>
	table {
		width: 100%;
	}
</style>
