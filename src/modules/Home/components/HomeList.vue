<template>
  <div class="module-list">
		<HomeItem name="Gestion Essence" path="/gestion-essence" />
	</div>
</template>

<script>
import HomeItem from '@/modules/Home/components/HomeItem.vue'

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
}
</style>