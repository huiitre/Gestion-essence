<template>
  <DetailTransaction />
  <div class="transaction" v-on:click="openDetail">
    <span class="transaction__date">05/02/2022</span>
    <span class="transaction__montant">65.85 €</span>
    <span class="transaction__conso">6.5L/100</span>
  </div>
</template>

<script>
import Detailtransaction from '@/modules/GestionEssence/components/popup/DetailTransaction.vue'

export default {
  name: 'Transaction',
  components: {
    Detailtransaction
  },
  data() {
    return {
      detailPopup: false
    }
  },
  computed: {
  },
  methods: {
    openDetail() {
      this.detailPopup = !this.detailPopup
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