<template>
  <div class="transaction" v-on:click="setIsOpen">
    <span class="transaction__date">{{ transformDate }}</span> | 
    <span class="transaction__montant">{{ item.t_montant }} €</span> | 
    <span class="transaction__conso">{{ item.t_conso }} L / 100</span>
  </div>
</template>

<script>

export default {
  name: 'Transaction',
  props: ['item'],
  components: {
  },
  computed: {
    transformDate() {
      const date = new Date(this.item.t_date)
      const newDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return newDate
    }
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