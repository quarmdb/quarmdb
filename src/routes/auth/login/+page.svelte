<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="wrapper">
	<div class="forms">
		<form action="/auth/login" method="POST">
			<h2>Login to QuarmDB</h2>
			<section class="input-group">
				<label for="Email">Email</label>
				<input type="text" name="email" value={form?.email ?? ''} />
			</section>
			<section class="input-group">
				<label for="password">Password</label>
				<input type="password" name="password" />
				{#if form?.badLogin}
					<span class="error">Email/Password combo is bad</span>
				{/if}
			</section>
			<section class="submit">
				<button type="submit">Login</button>
				<span>or</span><a href="/auth/register">Register</a>
			</section>
		</form>
	</div>
</div>

<style>
	div.wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div.forms {
		width: 700px;
		display: flex;
		flex-direction: column;
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	section.input-group {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;

		& label {
			position: absolute;
			top: -0.75rem;
			left: 1rem;
			background-color: var(--surface-1);
		}
	}

	section.submit {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 3rem;

		& button {
			width: 10rem;
		}
	}

	input[type='text'],
	input[type='password'] {
		background-color: var(--surface-1);
		border: 1px solid var(--surface-4);
		padding: 1rem;
		color: var(--text-1);
	}

	input[type='text']:focus,
	input[type='password']:focus {
		outline: none;
		border-color: var(--brand);
	}

	span.error {
		color: red;
	}
</style>
