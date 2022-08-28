<template>
	<router-link :to="path" class="return-button">
		<i class="return-button__icon bi bi-arrow-left-square"></i>
	</router-link>
</template>

<script>
export default {
	name: 'ReturnButton',
	props: ['path'],
};
</script>

<style lang="scss" scoped>
.return-button {
  &__icon {
    font-size: 2rem;
		color: #fff;
	}
}
</style>
