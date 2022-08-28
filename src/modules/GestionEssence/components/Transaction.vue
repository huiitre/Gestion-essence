<template>
  <div class="transaction">
    <span class="transaction__date">date</span>
    <span class="transaction__montant">montant</span>
    <span class="transaction__conso">conso</span>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
};
</script>

<style lang="scss" scoped>
.transaction {
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;

  &__date {

  }
  &__montant {

  }
  &__conso {

  }
}
</style>