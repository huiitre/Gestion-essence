<template>
  <div class="transaction" v-on:click="setIsOpen">
    <span class="transaction__date">{{ item.t_created_at }}</span> | 
    <span class="transaction__montant">{{ item.t_balance }}</span> | 
    <span class="transaction__conso">{{ item.conso }} L/100</span>
  </div>
</template>

<script>

export default {
  name: 'Transaction',
  props: ['item'],
  components: {
  },
  computed: {
  },
  methods: {
  },
  data() {
    return {
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

  &__date,
  &__montant,
  &__conso {
    font-weight: bold;
  }
}
</style>