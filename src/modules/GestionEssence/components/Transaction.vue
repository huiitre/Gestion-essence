<template>
  <div class="transaction" v-on:click="setIsOpen">
    <span class="transaction__date">05/02/2022</span>
    <span class="transaction__montant">65.85 €</span>
    <span class="transaction__conso">6.5L/100</span>
  </div>
  <DetailTransaction :isOpen="getIsOpen" />
</template>

<script>
import DetailTransaction from '@/modules/GestionEssence/components/popup/DetailTransaction.vue'

export default {
  name: 'Transaction',
  props: ['isOpenDetail'],
  components: {
    DetailTransaction
  },
  computed: {
    getIsOpen() {
      //* le computed (getter) getIsOpen est la méthode qui va m'afficher la dernière version du state
      console.log('open status : ', this.isOpen);
      return this.isOpen
    }
  },
  methods: {
    setIsOpen() {
      //* la méthode setIsOpen est ma mutation
      this.isOpen = !this.isOpen
    }
  },
  data() {
    return {
      isOpen: false
    }
  }
};
</script>

<style lang="scss" scoped>
.transaction {
  display: flex;
  border: 1px solid $white;
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-around;
  
  &:not(:last-child) {
    margin: 2rem 0;
  }

  &__date {

  }
  &__montant {

  }
  &__conso {

  }
}
</style>