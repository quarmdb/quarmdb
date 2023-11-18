<script lang="ts">
	import innothule from './data/innothule.txt?raw';
	import ecommons from './data/ecommons.txt?raw';
	import { minMaxMapFile, parseMapFile } from './zonesvg';

	let parse = parseMapFile(innothule);
	let minmax = minMaxMapFile(parse);

	const pad = 25;

	let selected = 'innothule';

	function changeMap(to: string) {
		if (to === 'innothule') parse = parseMapFile(innothule);
		else if (to === 'ecommons') parse = parseMapFile(ecommons);
		minmax = minMaxMapFile(parse);
	}
</script>

<div class="wrapper">
	<h1>SVG Test</h1>
	<select bind:value={selected} on:change={() => changeMap(selected)}>
		<option value="innothule">Innothule</option>
		<option value="ecommons">East Commons</option>
	</select>
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
				stroke-width="5"
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-height: 100vh;
	}
	svg {
		background-color: #c0c0c0;
		border: 1px solid red;
	}
</style>
