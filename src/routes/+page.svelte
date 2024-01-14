<script>
	import TextArea from '$lib/components/TextArea.svelte';
  let fontSize = '1rem';
  let lineHeight = 'auto';
</script>

<main class="container">
	<h1>Super Testador de Colunas (V2)</h1>
	<p class="lead about">Bem vindo(a) ao <strong>Super Testador de Colunas!</strong></p>

  <div class="spacer"></div>

  <h4>
    Configurações
  </h4>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="fontSize">Tamanho da fonte</label>
        <input type="text" class="form-control" id="fontSize" bind:value={fontSize} />
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="lineHeight">Altura da linha</label>
        <input type="text" class="form-control" id="lineHeight" bind:value={lineHeight} />
      </div>
    </div>
  </div>

  <div class="spacer"></div>

  <h4>Testador</h4>
	<div>
		<TextArea fontSize={fontSize} lineHeight={lineHeight}></TextArea>
		<div class="row">
			<div class="col-md-6">
				<TextArea fontSize={fontSize} lineHeight={lineHeight}></TextArea>
			</div>
			<div class="col-md-6">
				<TextArea fontSize={fontSize} lineHeight={lineHeight}></TextArea>
			</div>
		</div>
		<TextArea fontSize={fontSize} lineHeight={lineHeight}></TextArea>
	</div>
</main>

<style lang="scss">
	main {
    padding-top: 1rem;
    padding-bottom: 1rem;
		height: 100vh;

    h1 {
      text-align: center;
    }

    .about {
      text-align: center;
    }

    .spacer {
      height: 3rem;
    }
	}
</style>
