<template>
  <RouterView />
</template>

<script>
import router from '@/router'

export default {
  name: 'App',
  created() {
    const checkUser = () => {
      console.log('checkUser');
    }
    console.log('router : ', router);
  }
}
</script>

<style lang="scss" src="@/assets/css/main.scss"></style>
