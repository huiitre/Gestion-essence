<template>
  <main class="home">
    <div class="module-list">
      <div class="module-item">Gestion Essence</div>
      <div class="module-item">Gestion Essence</div>
      <div class="module-item">Gestion Essence</div>
      <br /><br />
      <router-link class="link-test" to="/">home</router-link><br>
      <router-link class="link-test" to="/home2">home2</router-link><br>
      <router-link class="link-test" to="/home3">home3</router-link><br>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.link-test, .test {
  margin-top: 6rem;
  color: #fff;
}
</style>