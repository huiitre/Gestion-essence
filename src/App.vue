<template>
  <Spinner v-if="isLoadingCheckUser" />
  <Header />
  <RouterView class="page" v-if="!isLoadingCheckUser" />
</template>

<script>
import Spinner from '@/modules/common/components/Spinner.vue'
import Header from '@/modules/common/components/Header.vue'

export default {
  name: 'App',
  components: {
    Spinner,
    Header,
  },
  computed: {
    isLoadingCheckUser() {
      return this.$store.getters['User/getLoadingCheckUser']
    },
    isLogged() {
      console.log('isLogged : ', this.$store.getters['User/getIsLogged']);
      return this.$store.getters['User/getIsLogged']
    },
    currentView() {
      return this.$store.getters['Core/getCurrentView']
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/main.scss"></style>
