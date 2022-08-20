<template>
	<div class="module-list">
		<HomeItem name="Gestion Essence" path="/gestion-essence" />
	</div>
</template>

<script>
import HomeItem from './HomeItem.vue'

export default {
	name: 'HomeList',
  components: {
    HomeItem
  }
};
</script>

<style lang="scss" scoped>
.module-list {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 3rem 3rem 0 3rem;
}
</style>
