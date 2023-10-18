<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back</p>
{:else}
	<form action="?/register" method="POST">
		<section class="input-group">
			<label for="Email">Email</label>
			<input type="text" name="email" value={form?.email ?? ''} />
			{#if form?.badEmail}
				<p>Not Well Formed Email</p>
			{/if}
		</section>
		<input type="submit" value="submit" />
	</form>
{/if}
