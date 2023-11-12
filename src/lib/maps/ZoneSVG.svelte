<script lang="ts">
	import innothule from './data/innothule.txt?raw';
	import { minMaxMapFile, parseMapFile } from './zonesvg';

	const parse = parseMapFile(innothule);
	const minmax = minMaxMapFile(parse);

	const pad = 25;
</script>

<h1>Innothule Test</h1>
<pre>{JSON.stringify(minmax, null, 2)}</pre>

<div class="wrapper">
	<svg
		viewBox="{Math.floor(minmax.x.min) - pad} {Math.floor(minmax.y.min) -
			pad} {Math.floor(minmax.x.max - minmax.x.min) + 2 * pad} {Math.floor(
			minmax.y.max - minmax.y.min
		) +
			2 * pad}"
		width="500px"
		xmlns="http://www.w3.org/2000/svg">
		{#each parse as line}
			<line
				x1={line.start.x}
				y1={line.start.y}
				x2={line.end.x}
				y2={line.end.y}
				style="stroke: rgb({line.color.r} {line.color.g} {line.color.b})" />
		{/each}
	</svg>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	svg {
		background-color: #c0c0c0;
		border: 1px solid red;
	}
</style>
