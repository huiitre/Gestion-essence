<template>
	<main class="home">
		<HomeList />
	</main>
</template>

<script>
import { successToast } from '@/modules/common/components/toasts';
import HomeList from './HomeList.vue'

export default {
	name: 'Home',
  components: {
    HomeList
  },
	computed: {
		getName() {
			return this.$store.getters['User/getName'];
		},
	},
	methods: {
    logout() {
      //* on appelle la mutation Logout
      this.$store.commit('User/logout')
      //* on redirige vers /login
      this.$router.push('/login')
      successToast('Vous êtes déconnecté !')
    }
  },
};
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
</style>
