<template>
	<router-link :to="path">
		<i class="icon bi bi-plus-square"></i>
	</router-link>
</template>

<script>
export default {
	name: 'AddButton',
	props: ['path']
};
</script>

<style lang="scss" scoped>
.icon {
	font-size: 2rem;
	color: #fff;
  margin: 0 0.5rem;
}
</style>
