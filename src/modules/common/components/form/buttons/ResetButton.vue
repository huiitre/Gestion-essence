<template>
  <i v-on:click="executeCallback" class="icon bi bi-x-square"></i>
</template>

<script>
export default {
  name: 'ResetButton',
  props: ['callback'],
  methods: {
    executeCallback() {
      this.callback()
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