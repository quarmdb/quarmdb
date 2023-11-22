<script lang="ts">
	import innothule from './data/innothule.txt?raw';
	import ecommons from './data/ecommons.txt?raw';
	import { minMaxMapFile, parseMapFile } from './zonesvg';
	import type { MouseEventHandler } from 'svelte/elements';

	let parse = parseMapFile(innothule);
	let minmax = minMaxMapFile(parse);

	const pad = 25;

	let selected = 'innothule';

	function changeMap(to: string) {
		if (to === 'innothule') parse = parseMapFile(innothule);
		else if (to === 'ecommons') parse = parseMapFile(ecommons);
		minmax = minMaxMapFile(parse);
	}

	type LineClickEvent = MouseEvent & {
		currentTarget: EventTarget & SVGLineElement;
	};

	function lineClick(evt: LineClickEvent) {
		console.log(evt.currentTarget.getAttribute('data-points'));
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
		width="75vw"
		xmlns="http://www.w3.org/2000/svg">
		{#each parse as line}
			{#if line.type === 'line'}
				<line
					on:click={lineClick}
					data-points="{line.start.x} {line.start.y} {line.end.x} {line.end.y}"
					x1={line.start.x}
					y1={line.start.y}
					x2={line.end.x}
					y2={line.end.y}
					style="stroke: rgb({line.color.r} {line.color.g} {line.color.b})" />
			{:else}
				<circle
					cx={line.location.x}
					cy={line.location.y}
					stroke="red"
					fill="grey" />
				<text x={line.location.x} y={line.location.y}>{line.text}</text>
				<!-- point -->
			{/if}
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

		& line {
			stroke-width: 10;
		}
		& line:hover {
			stroke-width: 100;
		}

		& text {
			font-size: 5rem;
		}

		& circle:hover + text {
			font-size: 10rem;
		}

		& circle {
			r: 5vw;
		}

		& circle:hover {
			r: 10vw;
		}
	}
</style>
