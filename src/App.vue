<template>
	<Spinner v-if="isLoadingCheckUser" />
	<Header v-if="isLogged" />
	<RouterView class="page" v-if="!isLoadingCheckUser" />
</template>

<script>
import Spinner from '@/modules/common/components/Spinner.vue';
import Header from '@/modules/common/components/Header.vue';

export default {
	name: 'App',
	components: {
		Spinner,
		Header,
	},
	computed: {
		isLoadingCheckUser() {
			return this.$store.getters['User/getLoadingCheckUser'];
		},
    isLogged() {
      return this.$store.getters['User/getIsLogged']
    }
	},
};
</script>

<style lang="scss" src="@/assets/css/main.scss"></style>
