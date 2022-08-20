<template>
  <header class="header">
    <div class="header__disconnect"><i class="bi bi-box-arrow-right"></i></div>
  </header>
  <main class="home">
    <div class="module-list">
      <div class="module-item">Gestion Essence</div>
      <div class="module-item">Gestion Essence</div>
      <div class="module-item">Gestion Essence</div>
      <router-link to="/home2">home2</router-link>
      <router-link to="/home3">home3</router-link>
      <router-link to="/login">login</router-link>
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
//! save juste avant de dormir, à vérifier
.header {
height: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
padding-right: 0.5rem;
}
.header__disconnect {
align-self: end;
padding-right: 0.5rem;
}
.bi.bi-box-arrow-right {
font-size: 2rem;
}
.home {
margin-top: 3rem;
height: 100%;
margin-top: 25%;
}
</style>