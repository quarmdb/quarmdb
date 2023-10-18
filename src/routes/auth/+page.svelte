<script lang="ts">
	import { register } from 'module';
	import type { PageData, ActionData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	let displayRegister = true;
</script>

<div class="wrapper">
	{#if form?.register}
		<h2>
			Please check your email for your email verification. Thank you for signing
			up!
		</h2>
	{:else}
		<div class="forms">
			<form action="/auth?/login" method="POST" class:none={displayRegister}>
				<h2>Login to QuarmDB</h2>
				<section class="input-group">
					<label for="Email">Email</label>
					<input type="text" name="email" value={form?.email ?? ''} />
				</section>
				<section class="input-group">
					<label for="password">Password</label>
					<input type="password" name="password" />
				</section>
				<section class="submit">
					<button type="submit">Login</button>
					<span>or</span><a
						href={'#'}
						on:click|preventDefault={() => (displayRegister = true)}
						>Register</a>
				</section>
			</form>
			<form
				action="/auth?/register"
				method="POST"
				class:none={!displayRegister}>
				<h2>Register for QuarmDB</h2>
				<section class="input-group">
					<label for="Email" class:error={form?.badEmail}>Email</label>
					<input
						type="text"
						name="email"
						value={form?.email ?? ''}
						class:error={form?.badEmail} />
				</section>
				{#if form?.passwordMismatch}
					<span class="error">Passwords do not match</span>
				{/if}
				<section class="input-group">
					<label for="password1" class:error={form?.passwordMismatch}
						>Password</label>
					<input
						type="password"
						name="password1"
						value={form?.password1 ?? ''}
						class:error={form?.passwordMismatch} />
				</section>
				<section class="input-group">
					<label for="password2" class:error={form?.passwordMismatch}
						>Password Again</label>
					<input
						type="password"
						name="password2"
						value={form?.password2 ?? ''}
						class:error={form?.passwordMismatch} />
				</section>
				<section class="submit">
					<button type="submit">Register</button>
					<span>or</span><a
						href={'#'}
						on:click|preventDefault={() => (displayRegister = false)}>Login</a>
				</section>
			</form>
		</div>
	{/if}
</div>

<style>
	.none {
		display: none;
	}
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

	input.error {
		border-color: red;
	}
	label.error {
		color: red;
	}

	span.error {
		color: red;
	}
</style>
