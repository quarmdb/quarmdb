<script lang="ts">
	import { z } from 'zod';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<table>
	<tr>
		<th>Zone</th>
		<th>X</th>
		<th>Y</th>
		<th>Z</th>
		<th>Number</th>
		<th>Target Y</th>
		<th>Target X</th>
		<th>Target Z</th>

		<th>target_zone_id(short_name)</th>
	</tr>
	{#each data.zone_points as zp}
		<tr>
			<td>{zp.zone}</td>
			<td>{zp.x}</td>
			<td>{zp.y}</td>
			<td>{zp.z}</td>
			<td>{zp.number}</td>
			<td>{zp.target_x}</td>
			<td>{zp.target_y}</td>
			<td>{zp.target_z}</td>
			<td>{zp.short_name}</td>
		</tr>
	{/each}
</table>
