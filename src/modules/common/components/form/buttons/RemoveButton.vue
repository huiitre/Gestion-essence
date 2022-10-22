<template>
	<i v-on:click="executeCallback" class="icon bi bi bi-dash-square"></i>
</template>

<script>
export default {
	name: 'RemoveButton',
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
