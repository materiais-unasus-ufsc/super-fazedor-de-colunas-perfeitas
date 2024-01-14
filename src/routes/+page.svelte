<script>
	import TextArea from '$lib/components/TextArea.svelte';
	let fontSize = '21px';
	let lineHeight = '31px';
	let fontFamily = 'Roboto';
	$: finalFontFamily = fontFamily + ', sans-serif';
</script>

<main
	class="container"
	style="
    font-family: {finalFontFamily};
  "
>
	<div class="spacer"></div>
	<h1>Super Testador de Colunas (V2)</h1>
	<p class="lead about">Bem vindo(a) ao <strong>Super Testador de Colunas!</strong></p>

	<div class="spacer"></div>

	<div class="settings">
		<div>
			<i class="bi bi-gear-fill"></i>
			<h5>Configurações</h5>
		</div>
		<div class="row">
			<div class="col-md">
				<div class="form-group">
					<label for="fontSize">Tamanho da fonte</label>
					<input type="text" class="form-control" id="fontSize" bind:value={fontSize} />
				</div>
			</div>
			<div class="col-md">
				<div class="form-group">
					<label for="lineHeight">Altura da linha</label>
					<input type="text" class="form-control" id="lineHeight" bind:value={lineHeight} />
				</div>
			</div>
			<div class="col-md">
				<div class="form-group">
					<label for="fontFamily">Família da fonte</label>
					<input type="text" class="form-control" id="fontFamily" bind:value={fontFamily} />
				</div>
			</div>
		</div>
	</div>

	<div class="spacer"></div>

	<div>
		<TextArea {fontSize} {lineHeight}></TextArea>
		<div class="row">
			<div class="col-md-6">
				<TextArea {fontSize} {lineHeight}></TextArea>
			</div>
			<div class="col-md-6">
				<TextArea {fontSize} {lineHeight}></TextArea>
			</div>
		</div>
		<TextArea {fontSize} {lineHeight}></TextArea>
	</div>
	<div class="spacer"></div>
	<div class="separator"></div>
	<footer>
		Made by <a data-sveltekit-reload href="github.com/oasjs" target="_blank">oasjs</a>
	</footer>
</main>

<style lang="scss">
	main {
		padding-top: 1rem;
		padding-bottom: 1rem;

		h1 {
			text-align: center;
		}
		h5 {
			margin-bottom: 2rem;
			font-weight: 400;
		}

		.about {
			text-align: center;
		}

		.settings {
			padding: 1rem;
			background-color: #fcfcfc;
			border-radius: 0.5rem;
			box-shadow: 0 0 0.5rem rgba($color: #000000, $alpha: 0.1);

			& > div:first-child {
				display: flex;
				gap: 0.5rem;
				color: rgba($color: #000000, $alpha: 0.6);
			}
		}

		.spacer {
			height: 3rem;
		}
	}

	.separator {
		height: 1px;
		margin: 0 1rem;
		background-color: rgba($color: #000000, $alpha: 0.1);
	}
	footer {
		padding: 1rem;
		text-align: center;
		font-weight: bold;
	}
</style>
