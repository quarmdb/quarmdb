<script lang="ts">
	import LeftNav from '$lib/components/LeftNav.svelte';
	import ThemeWrapper from '$lib/components/ThemeWrapper.svelte';
	import Hamburger from '$lib/svg/Hamburger.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	let navClosed = false;
</script>

<ThemeWrapper>
	<div class="wrapper">
		<nav class:closed={navClosed}>
			<LeftNav />
			<div>
				<button on:click={() => (navClosed = !navClosed)}>
					{navClosed ? '>' : '<'}
				</button>
			</div>
		</nav>
		<main class:closed={!navClosed}>
			<article>
				<slot />
			</article>
		</main>
		<footer>
			<p>
				This is not affiliated with <a href="https://www.projectquarm.com"
					>Project Quarm</a
				>.
			</p>
			<p>
				<a href="https://github.com/quarmdb/quarmdb/issues">Issues/Feedback</a>
			</p>
			<p>
				Quarm Database: {data.dbinfo.year}-{data.dbinfo.month}-{data.dbinfo.day}
				at {data.dbinfo.hour}:{data.dbinfo.minute}
			</p>
		</footer>
	</div>
</ThemeWrapper>
