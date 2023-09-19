<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let checked = false;

	onMount(() => {
		//console.log('onMount');
		if (browser) {
			console.log('browser = ', browser);
			let theme = localStorage.getItem('theme');

			if (theme === null || (theme !== 'light' && theme !== 'dark')) {
				console.log('theme not set');
				checked = true;
			} else {
				console.log('Theme in local storage is ', theme);
				checked = theme === 'dark';
			}

			setThemeBasedOnChecked();
		}
	});

	function setThemeBasedOnChecked() {
		if (browser) {
			console.log('setThemeBasedOnChecked() => ', checked);
			let theme = 'light';
			if (checked) theme = 'dark';
			document.documentElement.setAttribute('data-theme', theme);
			document.getElementById('theme-selector-label')?.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
			console.log('saved');
		}
	}
</script>

<section>
	<label
		for="theme-selector"
		data-theme="test"
		id="theme-selector-label"
		class:dark={checked}
		class:light={!checked}>Words</label
	>
	<input type="checkbox" id="theme-selector" bind:checked on:change={setThemeBasedOnChecked} />
</section>

<style>
	section {
		position: relative;
	}

	input[type='checkbox'] {
		display: none;
	}

	label {
		position: relative;
		width: 5rem;
	}

	label::before {
		content: attr(data-theme);
		position: absolute;
		left: 0;
	}
</style>
