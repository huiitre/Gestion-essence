<template>
  <router-link :to="path" class="module-item">
		{{ name }}
	</router-link>
</template>

<script>
export default {
  name: 'HomeItem',
  props: ['name', 'path']
};
</script>

<style lang="scss" scoped>
.module-item {
	border: 2px solid #a6a6a6;
	padding: 1.5rem;
	text-align: center;
	font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  margin: 1rem 0;
}
.module-item:active {
	opacity: 0.5;
}
</style>