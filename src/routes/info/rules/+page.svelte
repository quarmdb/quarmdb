<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<tr><th>Rule Name</th><th>Rule Value</th><th>Notes</th><th>ruleset id</th><th>Zones</th></tr>
	{#each data.rules as rule}
		<tr>
			<td>{rule.rule_name}</td>
			<td>{rule.rule_value}</td>
			<td>{rule.notes}</td>
			<td>{rule.ruleset_id}</td>
			<td>{rule.zones}</td>
		</tr>
	{/each}
</table>
