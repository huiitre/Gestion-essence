<script>
import Popup from '@/modules/common/components/Popup.vue';
export default {
  name: 'Transaction',
  props: ['item', 'callback', 'deleteMode'],
  components: {
    Popup
  },
  mounted() {
    this.deleteModeSelected = false
  },
  computed: {
    /* transformDate() {
      const date = new Date(this.item.t_date)
      const newDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return newDate
    } */
  },
  methods: {
    successCallback() {
      this.callback(this.item.t_id)
      this.deleteModeSelected = !this.deleteModeSelected
    }
  },
  data() {
    return {
      deleteModeSelected: false,
      deleteModeComp: this.deleteMode,
      popup: true
    }
  },
};
</script>

<template>
  <Popup v-if="popup" />
  <div v-bind:class="deleteModeSelected && 'delete-mode--selected'" class="transaction" v-on:click="deleteMode ? successCallback() : ''">
    <span class="transaction__date">{{ item.t_date }}</span> | 
    <span class="transaction__montant">{{ item.t_montant }} €</span> | 
    <span class="transaction__conso">{{ item.t_conso }} L</span>
  </div>
</template>

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