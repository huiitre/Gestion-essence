<template>
	<i v-on:click="reset" class="icon bi bi-arrow-clockwise"></i>
</template>

<script>
export default {
	name: 'RefreshButton',
  methods: {
    reset() {
      this.$store.dispatch('GestionEssence/resetTransactionsList')
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
	font-size: 2rem;
	color: #fff;
  margin: 0 0.5rem;
}
</style>
