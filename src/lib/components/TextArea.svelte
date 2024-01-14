<script>
	import { tick } from 'svelte';

	export let fontSize;
	export let lineHeight;
	let value = '';

	let textarea;
	async function textAreaAdjust() {
		textarea.style.height = 'auto';
		await tick();
		textarea.style.height = textarea.scrollHeight + 'px';

		if (value.length > 0) {
			textarea.style.padding = '0';
		} else {
			textarea.style.padding = '1rem';
			textarea.style.height = '100px';
		}
	}
</script>

<textarea
	id="textarea"
	bind:value
	bind:this={textarea}
	on:input={textAreaAdjust}
	placeholder="Digite aqui o texto que você quer testar."
	spellcheck="false"
	style="
    font-size: {fontSize};
    line-height: {lineHeight};
  "
></textarea>

<style lang="scss">
	textarea {
		width: 100%;
		height: 100px;
		margin: 1rem 0;
		padding: 1rem;

		box-sizing: border-box;
		border: none;
		border-radius: 0.5rem;
		outline: none;
		resize: none;
		overflow: hidden;

		background-color: #f7f7f7;
		text-align: justify;
		hyphens: auto;
	}
</style>
