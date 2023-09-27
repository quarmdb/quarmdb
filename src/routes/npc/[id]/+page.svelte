<script lang="ts">
	import NpcDisplay from '$lib/components/NPCDisplay.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<a href="/npc/all">All NPCS</a>

<NpcDisplay npc={data.npc} loot={data.loot} spawn={data.spawn} />
