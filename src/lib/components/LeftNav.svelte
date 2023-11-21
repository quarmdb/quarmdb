<script lang="ts">
	import { page } from '$app/stores';
	import { getAllTradeSkills } from '$lib/db/constants/skills';
	import { urlBlob } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { createEventDispatcher } from 'svelte';

	let subDir = '';
	$: subDir = $page.url.pathname.slice(1).split('/')[0];

	let dispatch = createEventDispatcher();
	const navClicked = () => {
		dispatch('navClicked');
	};

	let skillsOpen = false;
</script>

<nav>
	<span class="title"
		><a href="/" class="title" on:click={navClicked}>QuarmDB</a>
		<ThemeSwitcher />
	</span>
	<ul>
		<li>
			<a
				class="major"
				href="/items/search"
				class:selected={subDir === 'items'}
				on:click={navClicked}>Items</a>
		</li>
		<ul>
			<li>
				<a class="minor" href="/items/bags" on:click={navClicked}>Bags</a>
			</li>
		</ul>
		<li>
			<a
				class="major"
				href="/npc/search"
				class:selected={subDir === 'npc'}
				on:click={navClicked}>NPCs</a>
		</li>
		<li>
			<a
				class="major"
				href="/zone"
				class:selected={subDir === 'zone'}
				on:click={navClicked}>Zone</a>
		</li>
		<ul>
			<li>
				<a class="minor" href="/zone/zem" on:click={navClicked}>Zem Info</a>
			</li>
		</ul>
		<li>
			<a
				class="major"
				href="/faction/all"
				class:selected={subDir === 'faction'}
				on:click={navClicked}>Factions</a>
		</li>
		<!-- <li><a class="major" href="/merchant">Merchant</a></li> -->
		<li>
			<a
				class="major"
				href={'#'}
				on:click|preventDefault={() => {
					skillsOpen = !skillsOpen;
				}}
				class:selected={subDir === 'skills'}
				>Skills {#if skillsOpen}-{:else}+{/if}</a>
		</li>
		{#if skillsOpen}
			<ul transition:slide>
				{#each getAllTradeSkills() as tradeSkill}
					<li>
						<a
							class="minor"
							href="/skills/{tradeSkill.id}/{urlBlob(tradeSkill.name)}"
							on:click={navClicked}>{tradeSkill.name}</a>
					</li>
				{/each}
			</ul>
		{/if}
		<li>
			<a
				class="major"
				href="/info"
				class:selected={subDir === 'info'}
				on:click={navClicked}>Info</a>
		</li>
		<ul>
			<li>
				<a class="minor" href="/info/exp" on:click={navClicked}>Experience</a>
			</li>
			<li>
				<a class="minor" href="/info/rules" on:click={navClicked}>Rules</a>
			</li>
		</ul>
	</ul>
</nav>

<style>
	span.title {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		& a.title:visited,
		& a.title {
			font-size: 3rem;
			display: block;
			text-align: center;
			color: var(--text);
		}

		& a.title:hover {
			color: var(--brand);
			text-decoration-color: var(--brand);
		}
	}
	nav {
		width: 100%;
		background-color: var(--surface-2);
		font-size: 1rem;

		& ul {
			width: 100%;
			display: block;
		}
	}

	li {
		width: 100%;
		list-style: none;
		display: block;
	}

	a.major,
	a.minor {
		display: block;
		padding: 0.25rem 1rem;
		text-decoration: none;
	}
	a.major {
		font-size: 2.5rem;
	}

	a.minor {
		font-size: 1.75rem;
		padding-left: 2rem;
	}

	a.major:hover,
	a.minor:hover {
		text-decoration: underline;
		border-right: 0.25rem solid var(--brand);
		background-color: var(--surface-3);
	}

	a:visited,
	a {
		color: var(--brand);
		text-decoration-color: var(--text);
	}

	a.selected {
		text-decoration: underline;
		border-right: 0.25rem solid var(--brand);
		background-color: var(--surface-3);
	}
</style>
