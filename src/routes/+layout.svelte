<script>
</script>

<slot />

<style lang="scss" global>
	// Custom.scss
	// Option B: Include parts of Bootstrap

	// Required
	@import '../node_modules/bootstrap/scss/functions';
	@import '../node_modules/bootstrap/scss/variables';
	@import '../node_modules/bootstrap/scss/mixins';

	// Optional
	@import '../node_modules/bootstrap/scss/reboot';
	@import '../node_modules/bootstrap/scss/type';
	@import '../node_modules/bootstrap/scss/grid';
	@import '../node_modules/bootstrap/scss/forms';
	@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

  // Fonts
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

</style>
