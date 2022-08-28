<template>
  <div class="transaction">
    <span class="transaction__date">05/02/2022</span>
    <span class="transaction__montant">65.85 €</span>
    <span class="transaction__conso">6.5L/100</span>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  computed: {
  },
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