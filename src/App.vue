<template>
  <Spinner v-if="isLoadingCheckUser" />
  <RouterView v-if="!isLoadingCheckUser" />
</template>

<script>
import router from '@/router'
import Spinner from '@/modules/common/components/Spinner.vue'

export default {
  name: 'App',
  components: {
    Spinner
  },
  computed: {
    isLoadingCheckUser() {
      return this.$store.getters['User/getLoadingCheckUser']
    }
  }
}
</script>

<style lang="scss" src="@/assets/css/main.scss"></style>
