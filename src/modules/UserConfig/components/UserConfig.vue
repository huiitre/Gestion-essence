<script>
export default {
  name: 'UserConfig',
  created() {
    console.log('%c UserConfig.vue #5 || env : ', 'background:red;color:#fff;font-weight:bold;', process.env);
  },
  computed: {
    getName() {
      return this.$store.getters['User/getName']
    },
    getApiUrl() {
      const instance = this.$store.getters['Core/getApiUrl']
      const protocol = this.$store.getters['Core/getProtocol']

      return protocol + '://' + instance + '/api'
    },
    getVersion() {
      return this.$store.getters['Core/getVersion']
    }
  }
};
</script>

<template>
  <main class="user-config">
    <div class="user-config__infos">
      <div class="user-config__infos__elem apiurl">
        Version actuelle : 
        {{ getVersion }}
      </div>
      <div class="user-config__infos__elem apiurl">
        URL api : 
        {{ getApiUrl }}
      </div>
      <div class="user-config__infos__elem username">
        Pseudo : 
        {{ getName }}
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.user-config {
  &__infos {
    border: 1px solid grey;
    padding: 1rem;

    &__elem:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

}
</style>