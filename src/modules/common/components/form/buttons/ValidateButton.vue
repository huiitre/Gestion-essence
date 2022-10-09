<template>
  <i v-on:click="callback" class="icon bi bi-check-square"></i>
</template>

<script>
export default {
  name: 'ValidateButton',
  methods: {
    callback() {
      this.$emit('callback')
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