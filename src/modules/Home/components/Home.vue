<template>
  Home {{ count }}
  <button v-on:click="increment">clic</button>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    count() {
      return this.$store.state.User.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('User/test', {nb: 10})
      console.log('store : ', this.$store.state.User.count);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>