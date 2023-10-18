<script lang="ts">
</script>

<form>
	<section class="input-group">
		<label for="Email">Email</label>
		<input type="email" name="email" />
	</section>
</form>

<style>
	form {
		display: flex;
		gap: 1rem;
		width: 100%;
		flex-direction: column;
	}
	section.input-group {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: column;
		z-index: 2;
	}
</style>
