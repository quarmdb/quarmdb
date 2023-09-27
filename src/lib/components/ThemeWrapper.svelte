<script lang="ts">
	import { browser } from '$app/environment';
	import { darkModeStore } from '$lib/stores';

	if (browser) {
		if (
			localStorage.getItem('theme') === 'dark' ||
			window.matchMedia('(prefers-color-scheme:dark').matches
		) {
			$darkModeStore = true;
		} else {
			$darkModeStore = false;
		}
	}

	$: if ($darkModeStore || !$darkModeStore) {
		if (browser) {
			localStorage.setItem('theme', $darkModeStore ? 'dark' : 'light');
			document.documentElement.setAttribute('data-theme', $darkModeStore ? 'dark' : 'light');
		}
	}
</script>

<slot />
